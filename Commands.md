# Module 3 Demo 1: Installing kubectl

## Install Kubectl
```
choco install kubernetes-cli
```
[Kubectl Install Docs](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/#install-nonstandard-package-tools)

# Module 3 Demo 2: Install and Configure AWS CLI and eksctl
## Install EksClt:
```
choco install eksctl
```
[EksCtl Install Docs](https://eksctl.io/installation/)

## Install AWS CLI on Windows:
```
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```
[AWS CLI Install Docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

# Module 3 Demo 3: Create AWS User and Key

## AWS Policies Setup
Create a user group called eks-group witht the following policies:
```
AmazonEC2FullAccess
IAMFullAccess
AWSCloudFormationFullAccess
```

Create an inline policy called eks-policy:
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "Statement1",
			"Effect": "Allow",
			"Action": "eks:*",
			"Resource": "*"
		},
        {
            "Action": [
                "ssm:GetParamater",
                "ssm:GetParamaters"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
	]
}
```

# Module 3 Demo 4: Create an EKS Cluster with eksctl
## Create the EKS cluster
Configure the AWS credicials:
```
aws configure
```

## Setup kubeconfig:
```
aws eks --region us-east-1 update-kubeconfig --name pscluster
```

Deploy the EKS Cluster:
```
eksctl create cluster --name pscluster --nodes-min=3 --nodes-max=4 --instance-selector-vcpus=2 --instance-selector-memory=4 --version=1.30
```

# Module 3 Demo 5: Deploying a Basic Application to EKS

# Module 3 Demo 6: Using eksctl to Upgrade a Cluster

# Module 3 Demo 7: Managing EKS with eksctl

# Module 3 Demo 8: Destroying the EKS Cluster

## Remove the cluster
Deleting the EKS Cluster:
```
eksctl delete cluster --name pscluster
```