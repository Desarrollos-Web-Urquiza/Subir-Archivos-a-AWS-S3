const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3({

	//Campos a completar con los datos de la consola de AWS yendo a "IAM/users/(nombreDeUsuario)/Security credentials/Create access key"
	accessKeyId: "",
	secretAccessKey: ""

});

/*Leer y buscar el/los archivo/s a subir con 'fs'*/
fs.readFile("", /*<-- Ahí va la ruta del archivo o carpeta que se quiere subir a AWS S3*/ (err, data) => {

	if (err) throw err;

	var parametrosPutObject = {

		Bucket: '', /*<-- Ahí va el "Bucket" o carpeta de S3 en donde se va almacenar nuestro/s archivo/s a subir*/
		Key: '', /*<-- Ahí va la ruta de dentro del "Bucket" en donde se va almacenar nuestro/s archivo/s a subir*/
		Body: data

	}
	/*Subir el/los archivo/s a AWS S3*/
	s3.putObject(parametrosPutObject, (err, data) => {

		if (err) throw err;

		console.log(data);


	})
})