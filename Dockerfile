FROM centos6

# Enable EPEL for Node.js
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-

# Intall Node...
RUN yum install -y npm

# Copy app to /src
COPY . /src

# Install app and denpendencies into /src
RUN cd /src; npm install

EXPOSE 8082

CMD cd /src && node ./app.js