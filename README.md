# serverless

# Requirements
1. nodejs >=12.x
2. npm or yarn
3. AWS account (IAM permission)

# Set up environment
1. Install serverless framework: npm i -g serverless
2. Set up AWS profile: serverless config credentials --provider aws --key <key> --secret <secret>
3. Install packages: npm i
4. Go to backend: cd backend and then run: npm i

# Deploy to AWS
1. Run: serverless deploy

## Notes
1. Run: `sls create_domain` before `sls deploy`

## Reference documents
- https://medium.com/@prasadjay/amazon-cognito-user-pools-in-nodejs-as-fast-as-possible-22d586c5c8ec
- https://medium.com/@Da_vidgf/using-cognito-for-users-management-in-your-serverless-application-1695fec9e225
- https://serverless-stack.com/chapters/configure-cognito-user-pool-in-serverless.html
- https://github.com/react-boilerplate/react-boilerplate