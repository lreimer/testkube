FROM argoproj/argocd:latest

# Switch to root for the ability to perform install
USER root

# Install wget to download testkube
RUN apt-get update && \
 apt-get install -y \
 wget && \
 ## Configure testkube
 mkdir .testkube && echo "{}" > .testkube/config.json && \
 ## Download testkube and move to bin directory
 wget -O- https://github.com/kubeshop/testkube/releases/download/v1.1.5/testkube_1.1.5_Linux_x86_64.tar.gz | tar -xzvf - && \
 mv kubectl-testkube /usr/local/bin/testkube && \
 chmod +x /usr/local/bin/testkube

# Switch back to non-root user
USER 999