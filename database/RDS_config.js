module.exports = {
  user: process.env.ACCESS_KEY_ID,'kazshige',
  password: process.env.ACCESS_KEY_ID,'Marie0209$',
  database: 'books',
  host: 'aa7cqcjaicuswp.cjoiu535chhu.ap-northeast-1.rds.amazonaws.com',
  port: '3306'
};
require('dotenv').config();
module.exports = {
  accessKeyID: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  s3BucketName: process.env.S3_BUCKET_NAME
};