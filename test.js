<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="UTF-8">
    <title>ejer3</title>  
    
  </head>
<body ng-app="myApp">
	<h1>Silly example</h1>
	<label for="name">
		Write down your name <br/><br/>
		<input id="name" type="text" ng-model="name">
	</label>
	<h2>Hello {{ name }}</h2>
</body>
</html>