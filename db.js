const Sequelize = require ('sequelize');
const {STRING} = Sequelize.DataTypes;
/*This is the same as - const STRING = Sequelize.DataTypes.String*/

const conn = new Sequelize (process.env.DATABASE_URL ||'postgres://localhost:5432/acme_people_places_things')

const People = conn.define('people',{
    name: {type:STRING, unique:TRUE, allowNull:FALSE}
});
const Places = conn.define('places',{
    name: {type:STRING, unique:TRUE, allowNull:FALSE}
});
const Things = conn.define('things',{
    name: {type:STRING, unique:TRUE, allowNull:FALSE}
});
const Souvenir = conn.define('souvenir',{

})

Souvenir.belongsTo(People);
Souvenir.belongsTo(Places);
Souvenir.belongsTo(Things);
People.hasMany(Souvenir);
Places.hasMany(Souvenir);
Things.hasMany(Souvenir);

const syncAndSeed = async () =>{
    await conn.sync ({ force:true });
    const people = await Promise.all(data.people.map( name => People.create({ name })));
    const places = await Promise.all(data.places.map( name => Places.create({ name })));
    const things = await Promise.all(data.things.map( name => Things.create({ name })));
}


const data = {
    people: ['moe', 'larry', 'lucy', 'ethyl'],
    places: ['paris', 'nyc', 'chicago', 'london'],
    things: ['foo', 'bar', 'bazz', 'quq']
  };


// module.exports = {
//     syncAndSeed,
// }

syncAndSeed();
