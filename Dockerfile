FROM node:12.14.1-stretch-slim

ARG TINI_VERSION=v0.19.0

LABEL maintainer="Carlos Remuzzi cremuzzi@agetic.gob.bo"
LABEL org.label-schema.description="Backend del sistema de plantillas de AGETIC"
LABEL org.label-schema.name="plantillas-backend"
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.vcs-ref=$GITLAB_SHA
LABEL org.label-schema.vcs-url="https://gitlab.softwarelibre.gob.bo/agetic/plantillas/plantillas-backend"
LABEL org.label-schema.vendor="AGETIC"

ENV BACKEND_PUERTO=8000 \
    CITE_DIGITOS=5 \
    CITE_GUIA=ENTIDAD \
    CONFIG_JSON_PATH=/home/node/app/src/config/config.json.sample \
    CONFIG_JS_PATH=/home/node/app/src/config/config.js.sample \
    CORREO_HOST=localhost \
    CORREO_IGNORETLS=false \
    CORREO_ORIGEN=ejemplo@correo.gob.bo \
    CORREO_PUERTO=25 \
    CORREO_REMITENTE=Nombre-del-Remitente \
    CORREO_SECURE=false \
    CORREO_TLS_RECHAZAR=false \
    DB_HOST=plantillas_db \
    DB_NOMBRE=plantillas \
    DB_PASSWORD=plantillas \
    DB_PUERTO=5432 \
    DB_USUARIO=plantillas \
    DOCUMENTO_GET=false \
    HOST_BACKEND=0.0.0.0 \
    HOST_FRONTEND=0.0.0.0 \
    IDENTIFICADOR_DIRECCION_UNIDAD=2 \
    IDENTIFICADOR_DIRECTOR=2 \
    JWT_SECRET=esta-cadena-tiene-que-ser-modificada-en-produccion \
    JWT_SESSION=false \
    JWT_TIEMPO=60 \
    LDAP_BIND_DN=cn=admin,dc=entidad,dc=gob,dc=bo \
    LDAP_BIND_PASSWORD=admin \
    LDAP_SEARCHBASE=ou=usuarios,dc=entidad,dc=gob,dc=bo \
    LDAP_URL=ldaps://ldap.example.abc:1234 \
    NODE_ENV=production \
    NOTIFICACION_CORREO_TOKEN=correo-token \
    NOTIFICACION_CORREO_URL=http://192.168.1.2/correo \
    NOTIFICACION_SMS_TOKEN=sms-token \
    NOTIFICACION_SMS_URL=http://192.168.1.2/sms \
    RUTA_ARCHIVOS_EXTERNOS=./public/externos/ \
    RUTA_DOCUMENTOS=./public/documentos/

RUN apt-get update \
    && mkdir -p /usr/share/man/man1 \
    && apt-get install --no-install-recommends -y \
        build-essential \
        curl \
        openjdk-8-jre-headless \
        python \
    && npm install -g \
        pg \
        pg-hstore \
        sequelize \
        sequelize-cli \
    && curl -fsL https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini -o /usr/local/bin/tini \
    && chmod +x /usr/local/bin/tini \
    && mkdir /home/node/app \
    && chown -R node:node /home/node/app
    
WORKDIR /home/node/app

USER node

COPY --chown=node:node package.json .
COPY --chown=node:node ./parches/ ./parches/

RUN npm i \
    && npm run parchar

COPY --chown=node:node . .

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
COPY --chown=node:node seeder.sh /home/node/app/seeder.sh

VOLUME ["/home/node/app/public"]

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/tini","--","/usr/local/bin/entrypoint.sh"]

CMD ["node","index.js"]
