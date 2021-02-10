import Particles from "react-tsparticles";
import './tspractical.css';

function Tsparticles() {
    return(
        <Particles
        className="style"
        id="tsparticles"
        height="10vh" width="98.9vw"  
        options={
            {
                "background": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "position": "50% 50%",
                  "repeat": "no-repeat",
                  "size": "cover"
                },
                "backgroundMode": {
                  "enable": true,
                  "zIndex": 1
                },
                "interactivity": {
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "bubble"
                    }
                  },
                  "modes": {
                    "bubble": {
                      "distance": 400,
                      "duration": 0.3,
                      "opacity": 0.8,
                      "size": 4
                    },
                    "grab": {
                      "distance": 400,
                      "links": {
                        "opacity": 0.5
                      }
                    }
                  }
                },
                "particles": {
                  "collisions": {
                    "bounce": {
                      "horizontal": {
                        "random": {
                          "enable": true
                        }
                      },
                      "vertical": {
                        "random": {
                          "enable": true
                        }
                      }
                    }
                  },
                  "color": {
                    "value": "#fa25f7"
                  },
                  "links": {
                    "color": {
                      "value": "#fcfbfb"
                    },
                    "distance": 500,
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "attract": {
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "bottom",
                    "enable": true,
                    "outModes": {
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    }
                  },
                  "number": {
                    "density": {
                      "enable": true
                    },
                    "value": 400
                  },
                  "opacity": {
                    "random": {
                      "enable": true
                    },
                    "value": 0.7,
                    "animation": {
                      "minimumValue": 0.1,
                      "speed": 1
                    }
                  },
                  "shape": {
                    "options": {
                      "polygon": {
                        "nb_sides": 5
                      },
                      "star": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                        "width": 100,
                        "height": 100
                      },
                      "images": {
                        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    }
                  },
                  "size": {
                    "random": {
                      "enable": true
                    },
                    "value": 5.5,
                    "animation": {
                      "minimumValue": 0.1,
                      "speed": 40
                    }
                  },
                  "stroke": {
                    "color": {
                      "value": "#000000",
                      "animation": {
                        "enable": false,
                        "speed": 1,
                        "sync": true
                      }
                    }
                  }
                }
              }
        }
        />
    )
}

export default Tsparticles;