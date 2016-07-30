const pjson = require('./package.json');

const optionDefinitions = [    
    { 
        name: 'to', description: "Version to migrate to",
        type: String, typeLabel: 'version number', defaultOption: true, defaultValue: ''
    },    
    { 
        name: 'driver', description: "Database driver. Default: 'pg'",
        alias: 'r', type: String, typeLabel: 'pg|mysql|mssql', defaultValue: 'pg', 
    },
    { 
        name: 'host', description: "Host. Default: '127.0.0.1'",
        alias: 'h', type: String, typeLabel: '[underline]{hostname}', defaultValue: '127.0.0.1', 
    },
    { 
        name: 'port', description: "Host. Default: '5432'",
        alias: 'o', type: Number, typeLabel: '[underline]{port}', defaultValue: '5432', 
    },
    { 
        name: 'database', description: "Database name",
        alias: 'd', type: String, typeLabel: '[underline]{database}', defaultValue: '', 
    },
    { 
        name: 'username', description: "Username",
        alias: 'u', type: String, typeLabel: '[underline]{database}', defaultValue: '', 
    },
    { 
        name: 'password', description: "Password",
        alias: 'p', type: String, typeLabel: '[underline]{password}', defaultValue: '', 
    },        
    { 
        name: 'migration-directory', description: "A directory to run migration files from. Default: 'migrations''",
        alias: 'm', type: String, typeLabel: '[underline]{directory}', defaultValue: 'migrations', 
    },
    { 
        name: 'config', description: "Load configuration from a JSON file.  With a configuration file you can also use additional configuration parameters available on postgrator. See syntax from https://github.com/rickbergfalk/postgrator",
        alias: 'c', type: String, typeLabel: '[underline]{file}', 
    },
    { 
      name: 'version', description: 'Print version.',
      alias: 'v', type: Boolean
    },    
    { 
      name: 'help', description: 'Print this usage guide.',
      alias: '?', type: Boolean
    }        
]

const sections = [
  {
    header: 'Postgrator CLI',
    content: {
        options: { columns: [{name: 'one', maxWidth: 200}] },
        data: [        
            {one: 'postgrator <version> --database=<db> [--driver=<driver>] [--host=<host>] [--port=<port>] [--username=<username>] [--password=<password>]'},
            {one: 'postgrator <version> --config=<config>'}
        ]
    }
  },  
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    header: 'Examples',
    content: [
      {
        desc: '1. Specify parameters on command line',
        example: 'postgrator 002 --host 127.0.0.1 --database sampledb --username testuser --password testpassword'
      },
      {
        desc: '2. Use configuration file',
        example: 'postgrator 002 --config postgrator.json'
      },
    ]
  },        
  {
      header: 'About',
      content: [
          'postgrator-cli v. ' + pjson.version,
          '[underline]{https://github.com/MattiLehtinen/postgrator-cli}',
          '\n',
          'postgrator node.js library: [underline]{https://github.com/rickbergfalk/postgrator}',
      ]
  }
]

module.exports.sections = sections;
module.exports.optionList = optionDefinitions;