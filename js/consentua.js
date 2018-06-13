function makeRequest(opts) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var params = opts.params;
        if (params && typeof params === 'object' && opts.method == 'GET') {
            params = Object.keys(params).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');
            let url = opts.url + '?' + params;
            xhr.open(opts.method, url);
        } else {
            xhr.open(opts.method, opts.url);
        }
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach(function (key) {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }
        // We'll need to stringify if we've been given an object
        // If we have a string, this is skipped.
        if (params && typeof params === 'object' && opts.method == 'GET') {
            xhr.send();
        } else if (params && typeof params === 'object' && opts.method == 'POST') {
            xhr.send(JSON.stringify(params));
        } else {
            xhr.send(params);
        }

    });
}

function generateToken(token) {
    //remove any spaces from token
    token = token.replace(/\s+/g, '');
    //get date and it to the token, then hash
    var d = new Date();
    var loginStr = token + '_' + (d.getUTCDate()) + '_' + (d.getUTCMonth() + 1) + '_' + (d.getUTCFullYear());
    var hash = CryptoJS.MD5(loginStr).toString().toUpperCase();
    return hash;
};


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); //stop form from submitting
    var url = 'https://api.consentua.com',
        form = e.target,
        token = '',
        userId = '',
        status = document.getElementById('consentuaStatus'),
        errTxt = document.getElementById('errTxt');
    let key = '4d58ba73-1dec-4724-b040-df0b0caf38c5',
        opts = {
            method: 'POST',
            url: url + '/login/Service',
            params: {
                "ServiceId": "25",
                "ClientId": "1",
                "LoginToken": generateToken(key),
            },
            headers: {
                "Content-type": "application/json"
            }
        };
    errTxt.style.display = 'none';
    status.style.display = 'block';
    status.innerHTML = "logging in consent service"
    makeRequest(opts)
        .then(function (cb) {
            cb = JSON.parse(cb);
            token = cb.Token;
            let opts = {
                method: 'GET',
                url: url + '/serviceuser/GetServiceUser',
                params: {
                    "identifier": form['_replyto'].value,
                    "serviceId": cb.Id,
                    "token": token
                },
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            };
            status.innerHTML = "Requesting service user";
            return makeRequest(opts);
        })
        .then(function (cb) {
            cb = JSON.parse(cb);
            userId = cb.UserId;
            let opts = {
                method: 'POST',
                url: url + '/userconsent/SetConsents',
                params: {
                    "Consent": {
                        "ClientId": "1",
                        "ServiceId": "25",
                        "UserId": userId,
                        "Purposes": [{
                            "ConsentTemplateId": "20",
                            "PurposeId": "97",
                            "Consent": form['consent'].checked
                        }]
                    },
                    "ClientId": 1,
                    "ServiceId": 25,
                    "Token": token
                },
                headers: {
                    "Content-type": "application/json"
                }
            };
            status.innerHTML = "Setting user conset";
            return makeRequest(opts);
        }, function getServiceUserErr(err) {
            if (err.status == 404) {
                let opts = {
                    method: 'POST',
                    url: url + '/serviceuser/AddUserToService?identifier=' + form['_replyto'].value + '&serviceId=25&token=' + token,
                    params: {
                        "identifier": form['_replyto'].value,
                        "serviceId": '25',
                        "token": token
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                };
                status.innerHTML = "Requesting service user";
                return makeRequest(opts);
            } else {
                throw err
            }
        })
        .then(function (cb) {
            cb = JSON.parse(cb);
            if (cb.Success) {
                return cb;
            } else if (cb.UserId) {
                userId = cb.UserId;
                let opts = {
                    method: 'POST',
                    url: url + '/userconsent/SetConsents',
                    params: {
                        "Consent": {
                            "ClientId": "1",
                            "ServiceId": "25",
                            "UserId": userId,
                            "Purposes": [{
                                "ConsentTemplateId": "20",
                                "PurposeId": "97",
                                "Consent": form['consent'].checked
                            }]
                        },
                        "ClientId": 1,
                        "ServiceId": 25,
                        "Token": token
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                };
                status.innerHTML = "Setting user conset";
                return makeRequest(opts);
            } else {
                throw cb;
            }
        }).then(function (cb) {
            //consentua successfully setup, submit form
            status.innerHTML = "Consent set successfully, submitting form";
            // document.getElementById("contactForm").submit();
        })
        .catch(function (err) {
            console.error('Augh, there was an error!', err);
            status.style.display = 'none';
            errTxt.style.display = 'block';
            errTxt.innerHTML = "Error: " + err.statusText;
        });
});