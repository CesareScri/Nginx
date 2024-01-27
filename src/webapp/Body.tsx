import React, { useEffect } from "react";
import Prism from "prismjs";
import "./prism-js.css";
import "prismjs/components/prism-bash";
import CodeSnippet from "./CodeSnippet";

const Body = () => {
  useEffect(() => {
    // Call Prism.highlightAll() to apply syntax highlighting
    Prism.highlightAll();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl">Node.js Deployment</h2>
      <p className="text-gray-600 mt-4">
        This project utilizes Node.js, a popular server-side JavaScript runtime
        built on Chrome's V8 engine. It enables running JavaScript server-side
        scripts efficiently, making it a perfect choice for developing and
        deploying web applications and APIs, especially with frameworks like
        Express.
      </p>

      <p className="mt-5">
        Deploy a Node.js application on a cloud hosting provider using PM2,
        NGINX as a reverse proxy, and secure it with an SSL certificate from
        LetsEncrypt.
      </p>

      <div className="ml-5 mt-5 mr-5">
        <div>
          <h3 className="font-semibold text-lg">
            1. Prepare Your Node.js Application
          </h3>
          <CodeSnippet
            language={"bash"}
            code={`# Develop and test your application locally
npm install
npm start`}
          />

          <h3 className="font-semibold text-lg my-5">
            2. Choose a Hosting Provider and Create a Server Instance
          </h3>

          <ul className="ml-5 list-disc">
            <li className="mt-2">
              Select a hosting provider of your choice (e.g., AWS, Google Cloud,
              Azure, Linode, etc.).
            </li>
            <li className="mt-2">
              Create a new virtual server instance (often called a droplet, VM,
              or instance depending on the provider).
            </li>
          </ul>

          <h3 className="font-semibold text-lg my-5">
            3. SSH into Your Server
          </h3>

          <ul className="ml-5 list-disc">
            <li className="mt-2">Securely log into your server via SSH.</li>
            <li className="mt-2">
              For security, consider using a non-root user with sudo privileges.
            </li>
          </ul>

          <h3 className="font-semibold text-lg my-5">
            4. Install Node.js and NPM
          </h3>

          <ul className="ml-5 list-disc">
            <li className="mt-2">Install the latest LTS version of Node.js and NPM:</li>
          </ul>
          <CodeSnippet
            language={"bash"}
            code={`curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs
`}
          />

          <h3 className="font-semibold text-lg my-5">
            5. Verify the installation:
          </h3>

          <CodeSnippet
            language={"bash"}
            code={`node --version
npm --version
`}
          />

          <h3 className="font-semibold text-lg my-5">6. Clone Your Project</h3>
          <ul className="ml-5 list-disc">
            <li className="mt-2">
              Clone your project from a version control system such as Git:
            </li>
          </ul>
          <CodeSnippet
            language={"bash"}
            code={`git clone <your_project_repository_url>
`}
          />

          <h3 className="font-semibold text-lg my-5">
            7. Install Dependencies and Test the Application
          </h3>
          <ul className="ml-5 list-disc">
            <li className="mt-2">
              Navigate to your project directory and install dependencies:
            </li>
          </ul>
          <CodeSnippet
            language={"bash"}
            code={`cd <your_project_directory>
npm install
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Start your application to test if it's running correctly:</li>
          </ul>
          <CodeSnippet
            language={"bash"}
            code={`npm start
`}
          />

          <h3 className="font-semibold text-lg my-5">
            8. Set Up PM2 Process Manager
          </h3>
          <ul className="ml-5 list-disc">
            <li className="mt-2">Install PM2 globally:</li>
          </ul>
          <CodeSnippet
            language={"bash"}
            code={`sudo npm install pm2 -g
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Start your application with PM2:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`pm2 start <your_app_file>
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Ensure your application restarts on system reboot:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`pm2 startup
`}
          />

          <h3 className="font-semibold text-lg my-5">
            9. Configure a Firewall
          </h3>
          <ul className="ml-5 list-disc">
            <li className="mt-2">Enable and configure a firewall:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`sudo ufw enable
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
`}
          />

          <h3 className="font-semibold text-lg my-5">
            10. Install and Configure NGINX
          </h3>
          <ul className="ml-5 list-disc">
            <li className="mt-2">Install NGINX:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`sudo apt install nginx
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Configure NGINX to set up a reverse proxy:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`sudo nano /etc/nginx/sites-available/default
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Add the following configuration:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`server_name <your_domain.com> www.<your_domain.com>;

location / {
    proxy_pass http://localhost:<your_app_port>;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Validate and restart NGINX:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`sudo nginx -t
sudo systemctl restart nginx
`}
          />

          <h3 className="font-semibold text-lg my-5">
            11. Add a Domain and SSL with LetsEncrypt
          </h3>
          <ul className="ml-5 list-disc">
            <li className="mt-2">
              Point your domain to the server's IP address using A records.
            </li>
            <li className="mt-2">Install Certbot and obtain an SSL certificate:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d <your_domain.com> -d www.<your_domain.com>
`}
          />

          <ul className="ml-5 list-disc">
            <li className="mt-2">Set up automatic renewal for your SSL certificate:</li>
          </ul>

          <CodeSnippet
            language={"bash"}
            code={`sudo certbot renew --dry-run
`}
          />

          <p className="mt-5">
            With these steps, your Node.js application should be accessible via{" "}
            {"https://<your_domain.com>"}, running securely behind NGINX with an
            SSL certificate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
