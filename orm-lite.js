var Sequelize = require('sequelize');
var config = {
    "username": "mhaviv",
    "password": null,
    "database": "orm_middleware",
    "host": "127.0.0.1",
    "dialect": "postgres"
  };
var sequelize = new Sequelize(config);

var test_user = sequelize.define('test_user',{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	firstname: {
		type: Sequelize.STRING,
		allowNull: false, 
		validate: {
			notEmpty: true
		}
	},
	lastname: {
		type:Sequelize.STRING,
		allowNull: false, 
		validate: {
			notEmpty: true
		}
	}
});

var ormlite ={

	initialize : function(){


		test_user.sync().then(function(){
			test_user.create({
				firstname: 'jackson',
				lastname: 'pollock'
			})
			test_user.create({
				firstname: 'sylvia',
				lastname: 'plath'
			})
			test_user.create({
				firstname: 'daenerys',
				lastname: 'targaryen'
			})
		})


	},
	test_user: test_user,

	getAll: function(tableName, callback){
		this.initialize();
		tableName.findAll().then(function(rows){
			callback(rows);

		})
	},

	findById: function(id, tableName, callback){
		this.initialize();
		tableName.findById(id).then(function(row){
			callback(row);

		})
	}
}

module.exports = ormlite;