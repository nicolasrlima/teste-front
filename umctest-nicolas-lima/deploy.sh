#!/bin/sh

"C:\Program Files\Amazon\AWSCLIV2\aws.exe" s3 sync dist/ s3://bimbateste --acl public-read
"C:\Program Files\Amazon\AWSCLIV2\aws.exe" cloudfront create-invalidation --distribution-id EOSNFMXU0IUKH --paths  "/*"