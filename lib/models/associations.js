import Studio from './Studio';
import Actor from './Actor';
import Film from './Film';

Studio.hasMany(Film);
Film.belongsTo(Studio);

Film.belongsToMany(Actor, { through: 'FilmActor' });
Actor.belongsToMany(Film, { through: 'FilmActor' });

