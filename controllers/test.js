const oracledb = require('oracledb');

try {
  oracledb.initOracleClient({libDir: 'C:/Users/ravikant.sharma/Desktop/oracle/instantclient_19_10'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}

//Get users with pagination
exports.TestFuxn = async (req, res) => {
  let connection;
  try {
   connection = await oracledb.getConnection({ user: "ADMIN", password: "IgniteDB1234", connectionString: "igniteoracledb_high" });

    // Create a table
    let result = await connection.execute(`CREATE TABLE myusers5 (id number, name varchar2(20), age number)`);
    // let result = await connection.execute(`INSERT INTO myusers2(id,name,age) VALUES (1, 'Ravi', 23)`);
    // let result = await connection.execute(`SELECT * FROM myusers2 where age = 23`);
    res.send(result);

  } catch (err) {
    console.error("err1",err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("err2",err);
      }
    }
  }
};