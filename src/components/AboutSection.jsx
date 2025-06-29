import { BrainCog, LineChart, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI/ML Developer & Research Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I am passionate about leveraging machine learning, deep learning, and data science to create smart, scalable, and impactful solutions to real-world problems. With a strong foundation in algorithms, model development, and optimization, I thrive in turning raw data into actionable insights.
            </p>

            <p className="text-muted-foreground">
              My expertise spans across AI model development, computer vision, NLP, and cloud deployment. I continuously experiment, build, and innovate—keeping pace with the rapidly evolving AI landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/10EOMt1TOKx4KP3HZPqrYU163ZInWQbhq/view"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI/ML Development</h4>
                  <p className="text-muted-foreground">
                    Building and optimizing machine learning models using Python, TensorFlow, and PyTorch.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Transforming data into insights through advanced statistical and analytical techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Model Deployment</h4>
                  <p className="text-muted-foreground">
                    Deploying AI models via REST APIs, Streamlit, or cloud platforms like AWS and GCP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
