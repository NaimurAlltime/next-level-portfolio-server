interface ITechnology {
  name: string;
}

export interface IProject {
  name: string;
  description: string;
  category: "Frontend" | "Backend" | "Full-stack";
  featured: boolean;
  features: string[];
  technologies: ITechnology[];
  cover: string;
  repositoryLink: {
    client_side_code: string;
    server_side_code: string;
  };
  liveSiteLink: string;
}
