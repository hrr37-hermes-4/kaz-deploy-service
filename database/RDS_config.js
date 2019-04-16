require('dotenv').config();
module.exports = {
  user = process.env.RDS_USERNAME || 'root',
  password = process.env.RDS_PASSWORD || '',
  port = process.env.RDS_PORT || 3306,
  database = process.env.RDS_DB_NAME || 'books',
  host = process.env.RDS_HOSTNAME || '127.0.0.1'
};