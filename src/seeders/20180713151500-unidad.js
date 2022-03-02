'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('unidad', [
      {
        nombre: 'Unidad de Test',
        abreviacion: 'UTEST',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'DIRECCIÓN DE UNIDAD ACADÉMICA',
        abreviacion: 'DIR-UACAD',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE EVALUACIÓN Y ACREDITACIÓN',
        abreviacion: 'U-EVA',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE ASUNTOS ADMINISTRATIVOS',
        abreviacion: 'U-AADM',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE OPERACIONES',
        abreviacion: 'U-OP',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE INFORMÁTICA',
        abreviacion: 'U-INF',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE PLANIFICACIÓN',
        abreviacion: 'U-PL',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },{
        nombre: 'UNIDAD DE INFRAESTRUCTURA',
        abreviacion: 'U-INF',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE INTERACCIÓN SOCIAL Y ADMINISTRACIÓN',
        abreviacion: 'U-ISA',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'UNIDAD DE ICYT',
        abreviacion: 'U-ICYT',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'JEFATURA DE CARRERA DE INGENIERIA DE SISTEMAS',
        abreviacion: 'JDC-SIS',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE CONTABILIDAD',
        abreviacion: 'A-CONT',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA JURÍDICA',
        abreviacion: 'A-JUR',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE TESORERIA',
        abreviacion: 'A-TES',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE PRESUPUESTOS',
        abreviacion: 'A-PRE',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE CONTRATACIONES',
        abreviacion: 'A-CONTR',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE ACTIVOS FIJOS',
        abreviacion: 'A-ACTF',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE ALMACENES',
        abreviacion: 'U-ALM',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE RECURSOS HUMANOS',
        abreviacion: 'RRHH',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE SERVICIOS GENERALES',
        abreviacion: 'S-GNL',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE SUBSTRIA ACADÉMICA',
        abreviacion: 'A-SACAD',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE BIBLIOTECA',
        abreviacion: 'BIBL',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      },
      {
        nombre: 'ÁREA DE BIENESTAR ESTUDIANTIL',
        abreviacion: 'A-BEST',
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        _usuario_creacion: 1,
        _usuario_modificacion:1
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
