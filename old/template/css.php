<?php

/**
 * See if any CSS files have changed, and regenerate CSS if so
 */
 
$files = scandir(dirname(__FILE__).'/css/');
$css = '';
foreach($files as $f)
{
	if(preg_match('@\.css@', $f))
	{
		$mtimes[] = filemtime(dirname(__FILE__).'/css/'.$f);
		$css .= "@import url('$f');\n";
	}
}

$mtime = max( $mtimes );

if(!file_exists(dirname(__FILE__).'/consentua.crushed.css') || $mtime > filemtime(dirname(__FILE__).'/consentua.crushed.css'))
{
	require(dirname(__FILE__).'/csscrush/CssCrush.php');
	csscrush::$config->docRoot = dirname(__FILE__).'/css/';
	
	$file = csscrush_string($css);
	file_put_contents(dirname(__FILE__).'/consentua.crushed.css', $file);
}

header('Content-Type: text/css');
include(dirname(__FILE__).'/consentua.crushed.css');


