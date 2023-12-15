import pkg from 'pg'
/**
 * Соединение с БД
 * @returns 
 */
export function dbConnect(){
    const client = new pkg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Klinika',
        password: 'admin',
        port: 5432,
      })
      client.connect(function(err) {
        if (err) throw err;
        console.log("Connected db Klinika!");
      });
      return client;
}
