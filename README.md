## MyGitHub

The MyGitHub component is a pre-styled React component for displaying a GitHub user's projects and other informations. With just one import, you can easily display your projects with a clean and professional look. This component makes use of the GitHub API to fetch a user's projects and Axios for making HTTP requests. It is styled using Tailwind CSS to provide a modern and responsive design. Whether you're building a personal portfolio or creating a project showcase for a team, this component will help you present your projects in a polished and organized manner.

### Live Demo

You can see a live demo of the MyGitHub component here. This demo showcases the component in action and demonstrates the various styling options available.

### Installation

Before using the MyGitHub component, you'll need to have Axios installed in your project. You can install Axios using npm:
`npm install axios`

Once Axios is installed, you can install the MyGitHub component:
`npm install MyGitHub`

### Usage

To use the MyGitHub component, simply import it into your project and pass in the GitHub username and personal access token as props. Your personal access token is required to authenticate your request to the GitHub API.
```JavaScript
import MyGitHub from 'MyGitHub';

<MyGitHub 
  username="your-github-username" 
  token="your-github-token" 
/>
```


### GitHub Personal Access Token

To get your GitHub personal access token, you can follow these steps: 1. Go to your GitHub Settings and click on Developer Settings. 2. Click on Personal access tokens. 3. Click on Generate new token. 4. Give your token a descriptive name, select the necessary permissions, and then click on Generate token.

Your personal access token will be displayed only once, so make sure to copy it and store it securely.

### Props

The MyGitHub component accepts the following props:

- `username` (required): the GitHub username to display projects for. This should be a string.
- `token` (required): your GitHub personal access token. This should be a string.

### Styling

MyGitHub is styled using Tailwind CSS, a utility-first CSS framework for rapidly building custom user interfaces. Tailwind provides a wide range of classes for styling, making it easy to customize the look and feel of the component to match your project's style.

### Troubleshooting

If you encounter any issues while using the GitHub Projects Display component, please check the following:

- Ensure that Axios is installed in your project.
- Ensure that the GitHub API is accessible and the provided GitHub username is valid.
- Ensure that you have generated a GitHub personal access token and passed it as a prop.
- Make sure that the required props have been correctly passed in.

### Contributing

The GitHub Projects Display component is open-source and licensed under the MIT License.

### Support

For support or questions, please open an issue on the project's GitHub repository or contact me directly using this email: amoskyalo927@gmail.com
