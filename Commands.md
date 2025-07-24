# Module 5 Demo 1: Install and Configure gcloud

## Install Google Cloud CLI
[Google Cloud CLI Downlaod](https://cloud.google.com/sdk/docs/install)

## Login to Google Cloud

```
gcloud auth login
```

##
```
gcloud config set project <PROJECT_ID>
```

## Set the region
[Google Cloud Regions](https://cloud.google.com/about/locations#lightbox-regions-map)

```
gcloud config set compute/region <YOUR_REGION>
```

## Enable the Container Engine API. 
```
gcloud services enable container.googleapis.com
```

## Enable the Compute Engine API
```
gcloud services enable compute.googleapis.com
```

# Module 5 Demo 2: Create a GKE Cluster with gcloud

## Create the cluster
```
gcloud container clusters create <CLUSTER_NAME> \
  --num-nodes=1 \
  --machine-type e2-standard-2 \
  --disk-size 30GB \
  --enable-ip-alias \
  --release-channel regular \
  --cluster-version=1.32
```
## Install auth plugin
[gke-gcloud-auth-plugin install info](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_plugin)
```
gcloud components install gke-gcloud-auth-plugin
```

## Connect to the cluster
```
gcloud container clusters get-credentials <CLUSTER_NAME> --region us-east1 --project <PROJECT_ID>
```

# Module 5 Demo 3: Deploying a Basic Application to GKE

Create a deploymet for Xerxes
```
kubectl apply -f deployment.yaml 
```

Check on the pods
```
kubectl get po
```

Create a service to make the pods publicly accessible
```
kubectl apply -f service.yaml
```

List the services
```
kubectl get svc
```

Create a service to make the pods publicly accessible
```
kubectl apply -f hpa.yaml 
```

# Module 5 Demo 4: Using Gcloud to Upgrade a GKE Cluster

## Get avalable list of upgrades
```
gcloud container get-server-config | grep 1.33
```

## Upgrade Kubernetes cluster to Version 1.33.1
``` 
gcloud container clusters upgrade <CLUSTER_NAME> --master --cluster-version <VERSION>
```

## Upgrade Node pool
```
gcloud container clusters upgrade <CLUSTER_NAME> --node-pool=<NODE_POOL_NAME> --cluster-version <VERSION>
```

# Module 5 Demo 5: Managing GKE with gcloud


## Scaling Vertically
```
gcloud container node-pools create <NODE_POOL_NAME> \
  --cluster <CLUSTER_NAME> \
  --machine-type n1-standard-2 \
  --disk-size 30GB \
  --num-nodes=1
```

## Delete default Nodepool
```
gcloud container node-pools delete <NODE_POOL_NAME> --cluster <CLUSTER_NAME>
```

## Scaling Horizontally
```
gcloud container clusters update <CLUSTER_NAME> \
  --node-pool <NODE_POOL_NAME> \
  --enable-autoscaling \
  --min-nodes 1 --max-nodes 3
```

# Module 5 Demo 6: Destroying the GKE Cluster

## Remove the cluster
Deleting the AKS Cluster:
```
gcloud container clusters delete <CLUSTER_NAME>
```