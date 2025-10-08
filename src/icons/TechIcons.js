import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faLeaf, 
  faProjectDiagram, 
  faDatabase, 
  faClock, 
  faServer, 
  faNetworkWired, 
  faChartLine, 
  faCode 
} from "@fortawesome/free-solid-svg-icons";
import { faJava, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(faJava, faLeaf, faProjectDiagram, faDatabase, faClock, faServer, faNetworkWired, faChartLine, faCode, faNodeJs, faReact);

// Map tech names to Font Awesome icons
export const techIconMap = {
  "Java": ["fab", "java"],
  "Spring Boot": ["fas", "leaf"],
  "Apache Kafka": ["fas", "project-diagram"],
  "PostgreSQL": ["fas", "database"],
  "Apache Lucene": ["fas", "server"],        // server icon represents search engine / indexing
  "REST API": ["fas", "network-wired"],     // network icon for API connectivity
  "GraphQL": ["fas", "code"],               // code icon for query language
  "Micrometer": ["fas", "chart-line"],      // chart icon for metrics/monitoring
  "Prometheus": ["fas", "chart-line"],      // same as metrics, visually consistent
  "Quartz": ["fas", "clock"]
};
