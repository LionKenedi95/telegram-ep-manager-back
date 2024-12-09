# Function to build and push the image with the specified version
build_and_push_image() {
    version=$1
    if [ -z "$version" ]; then
        echo "Error: Version number is required"
        exit 1
    fi

    image_name="k00kla/telegram-ep-manager-back:$version"
    latest="k00kla/telegram-ep-manager-back:latest"

    echo "Building Docker image with tag $image_name..."
    docker buildx build --platform=linux/amd64 -t $image_name ../

    if [ $? -ne 0 ]; then
        echo "Error: Docker build failed"
        exit 1
    fi

    echo "Pushing Docker image to repository..."
    docker push $image_name

    if [ $? -ne 0 ]; then
        echo "Error: Docker push failed"
        exit 1
    fi

    echo "Docker image $image_name built and pushed successfully."
}

# Main script logic
if [ "$1" == "get-latest-version" ]; then
    get_latest_version
elif [ "$1" == "build-and-push" ]; then
    build_and_push_image $2
else
    echo "Usage: $0 {get-latest-version|build-and-push <version>}"
    exit 1
fi
