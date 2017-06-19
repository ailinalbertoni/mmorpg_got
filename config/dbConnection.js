/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	var db = new mongo.Db(
		'got', //nome do banco de dados
		new mongo.Server(
			'localhost', //string conendo o endereço do servidor
			27017, //porta de conexão
			{}
			),
		{ } //Configurações opcionais
		);

	return db;
}

module.exports = function(){
	return connMongoDB;
}