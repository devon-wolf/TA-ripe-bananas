import Studio from './Studio';
import Actor from './Actor';
import Film from './Film';
import Review from './Review';
import Reviewer from './Reviewer';

Studio.hasMany(Film);
Film.belongsTo(Studio);

Film.belongsToMany(Actor, { through: 'FilmActor' });
Actor.belongsToMany(Film, { through: 'FilmActor' });

Review.belongsTo(Reviewer);
Reviewer.hasMany(Review);

Film.hasMany(Review);

