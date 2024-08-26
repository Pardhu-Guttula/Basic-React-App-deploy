# Basic-React-App-Deploy

This repository contains a basic React application that is built and deployed using Docker and GitHub Actions. The workflow automates the process of building a Docker image, pushing it to Docker Hub, and deploying it to an Azure Virtual Machine (VM).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Repository Structure](#repository-structure)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Secrets Configuration](#secrets-configuration)
- [Deployment Script](#deployment-script)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before using this repository, ensure that you have the following:

1. **Docker Hub Account**: For storing your Docker images.
2. **Azure Virtual Machine**: Running a Linux-based OS with Docker installed.
3. **SSH Access**: SSH key pairs to securely access your Azure VM

## Workflow Overview

The workflow (`.github/workflows/deploy.yml`) is triggered on every push to the `main` branch. It performs the following steps:

1. **Checkout Code**: Retrieves the latest code from the repository.
2. **Docker Hub Login**: Authenticates to Docker Hub using provided credentials.
3. **Build and Push Docker Image**: Builds the Docker image from the repository and pushes it to Docker Hub.
4. **SSH Configuration**: Prepares SSH keys and known hosts for secure VM access.
5. **Deploy to Azure VM**: Transfers and executes a deployment script on the Azure VM to pull the latest Docker image and run the container.

## Secrets Configuration

The following secrets must be added to your GitHub repository for the workflow to function:

1. **DOCKERHUB_USERNAME**: Your Docker Hub username.
2. **DOCKERHUB_PASSWORD**: Your Docker Hub password.
3. **AZURE_VM_IP**: The IP address of your Azure VM.
4. **AZURE_SSH_USERNAME**: The SSH username for your Azure VM.
5. **AZURE_SSH_KEY**: The private SSH key used to access your Azure VM.

To add these secrets, navigate to your repository on GitHub, go to **Settings > Secrets and variables > Actions**, and click **New repository secret**.

## Deployment Script

The `deploy.sh` script, located at the root of the repository, handles the deployment on the Azure VM. It performs the following actions:

1. **Docker Hub Login**: Logs into Docker Hub using the credentials provided as parameters.
2. **Stop Existing Container**: Stops and removes any existing Docker container running the app.
3. **Pull Latest Image**: Pulls the latest Docker image from Docker Hub.
4. **Run New Container**: Runs a new Docker container with the updated image.
5. **Clean Up**: Deletes the `deploy.sh` script from the remote VM after execution.

## Usage

### Triggering the Workflow

The workflow is triggered automatically on every push to the `main` branch. Make sure your changes are committed to this branch to initiate the deployment process.

### Example Command

To manually trigger the workflow, use the following command:

```bash
git push origin main


## Troubleshooting

### Common Issues

1. **SSH Key Issues**: Ensure that the SSH key used in the `AZURE_SSH_KEY` secret is correctly configured and matches the public key on your Azure VM.
2. **Docker Login Errors**: Verify that the `DOCKERHUB_USERNAME` and `DOCKERHUB_PASSWORD` secrets are correct and that the Docker Hub account has the necessary permissions.
3. **Image Pull Errors**: Ensure that the Docker image exists in the Docker Hub repository and that the latest tag is being used correctly.

### Debugging

- Check the GitHub Actions logs under the **Actions** tab in your repository to see detailed logs of the workflow execution.
- Use `echo` statements in your scripts to output additional information to the logs.
