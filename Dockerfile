# Dependencies

FROM  node AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Create a build
FROM node AS build
WORKDIR /app
COPY --from=dependencies /app .
RUN npm run build
USER node

# Running the application
FROM node AS run
WORKDIR .
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY ./prisma ./prisma
COPY package.json tsconfig.json ./
RUN npm install -g prisma@5.17.0
RUN prisma generate
CMD ["npm", "run", "migrate:start:prod"]