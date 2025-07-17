# Module 4 Demo 1: Install and Configure Azure CLI

## Install Azure CLI
[Azure CLI Downlaod](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest&pivots=msi)

## Login to Azure

```
az login --tenant <TENANT_ID>
```

## Create a resource group

```
az group create --name <USERNAME>-rg --location eastus
```

```
az provider register --namespace Microsoft.OperationalInsights
az provider register --namespace microsoft.insights
```

# Module 4 Demo 2: Create AKS Cluster with Azure CLI

```
az aks create \
    --resource-group <RESOURCE_GROUP> \
    --name <NAME> \
    --node-count 1 \
    --enable-addons monitoring \
    --generate-ssh-keys \
    --kubernetes-version 1.32.5 \
    --node-vm-size standard_a2_v2
```

## Connect to the cluster
```
az aks get-credentials --resource-group tthomsen-rg --name pscluster --overwrite-existing
```

# Module 4 Demo 3: Deploying a Basic Application to AKE

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

# Module 4 Demo 4: Using Azure CLI to Upgrade an AKS Cluster

## Get avalable list of upgrades
```
az aks get-upgrades --resource-group <RESOURCE_GROUP> --name <CLUSTER_NAME> --output table
```

Upgrade Kubernetes to Version 1.33.1
``` 
az aks upgrade \
    --resource-group <RESOURCE_GROUP> \
    --name <CLUSTER_NAME> \
    --kubernetes-version <KUBERNETES_VERSION>
```

# Module 4 Demo 5: Managing AKS with Azure CLI
```
az aks update \
  --resource-group <RESOURCE_GROUP> \
  --name <CLUSTER_NAME> \
  --enable-cluster-autoscaler \
  --min-count 1 \
  --max-count 3
```

# Module 43 Demo 6: Destroying the AKS Cluster

## Remove the cluster
Deleting the AKS Cluster:
```
az aks delete --resource-group <RESOURCE_GROUP> --name <CLUSTER_NAME>
```