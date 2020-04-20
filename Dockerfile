# Specify a base image(node:alpine image)
#why we use node:alpine, bcz whole node base image will take time to load and
#unnecessary we get unused files..
FROM node:alpine

#Setting up directory for container to put all files
WORKDIR usr/app

#Minimizing cach busting by just splitting the COPY
Copy ./package.json ./


# Install some depenendencies
Run npm install

#Copying all files local machine to container directory.
Copy ./ ./

# Default command run when container will start
CMD ["npm", "start"]
