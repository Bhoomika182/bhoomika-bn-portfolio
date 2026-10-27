import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

// Animation variants for different categories
const categoryVariants = {
  languages: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      x: 10,
      transition: { duration: 0.3 }
    }
  },
  frontend: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.1
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: { duration: 0.3 }
    }
  },
  backend: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.02,
      x: -10,
      transition: { duration: 0.3 }
    }
  },
  databases: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    },
    hover: {
      scale: 1.03,
      y: 5,
      transition: { duration: 0.3 }
    }
  },
  ai: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.35
      }
    },
    hover: {
      scale: 1.02,
      x: 10,
      transition: { duration: 0.3 }
    }
  },
  devops: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    },
    hover: {
      scale: 1.02,
      x: -10,
      transition: { duration: 0.3 }
    }
  }
};

// Icon animations for each category
const iconVariants = {
  languages: {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { duration: 0.4, type: "spring", stiffness: 200 }
    },
    animate: {
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  frontend: {
    initial: { scale: 1 },
    hover: {
      scale: 1.4,
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  backend: {
    initial: { scale: 1 },
    hover: {
      scale: 1.3,
      y: -5,
      transition: { duration: 0.3, type: "spring" }
    },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  databases: {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: -10,
      transition: { duration: 0.4 }
    },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  ai: {
    initial: { scale: 1 },
    hover: {
      scale: 1.3,
      rotate: 15,
      transition: { duration: 0.4, type: "spring", stiffness: 200 }
    },
    animate: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  devops: {
    initial: { scale: 1 },
    hover: {
      scale: 1.3,
      y: -5,
      transition: { duration: 0.3, type: "spring" }
    },
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

// Tag animations for each category
const tagVariants = {
  languages: {
    hidden: { opacity: 0, scale: 0.8, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.1,
      x: 5,
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      borderColor: "rgba(239, 68, 68, 0.5)",
      transition: { duration: 0.2 }
    }
  },
  frontend: {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.15,
      y: -3,
      backgroundColor: "rgba(56, 189, 248, 0.1)",
      borderColor: "rgba(56, 189, 248, 0.5)",
      transition: { duration: 0.2 }
    }
  },
  backend: {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.1,
      x: -5,
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      borderColor: "rgba(34, 197, 94, 0.5)",
      transition: { duration: 0.2 }
    }
  },
  databases: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.12,
      y: 3,
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      borderColor: "rgba(168, 85, 247, 0.5)",
      transition: { duration: 0.2 }
    }
  },
  ai: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.12,
      y: -3,
      backgroundColor: "rgba(217, 70, 239, 0.15)",
      borderColor: "rgba(217, 70, 239, 0.6)",
      transition: { duration: 0.2 }
    }
  },
  devops: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.12,
      y: -3,
      backgroundColor: "rgba(14, 165, 233, 0.15)",
      borderColor: "rgba(14, 165, 233, 0.6)",
      transition: { duration: 0.2 }
    }
  }
};

const Skills = () => {
  // Map category titles to animation types
  const getCategoryType = (title) => {
    const categoryMap = {
      "Languages": "languages",
      "Frontend Development": "frontend",
      "Backend Development": "backend",
      "Databases": "databases",
      "Databases & Caching": "databases",
      "AI & LLM": "ai",
      "AI & Generative AI": "ai",
      "DevOps & Cloud": "devops",
      "DevOps & Tools": "devops",
      "DevOps": "devops"
    };
    return categoryMap[title] || "languages";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          My <span className="text-pink-500">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {skills.map((skill, index) => {
            const categoryType = getCategoryType(skill.title);

            return (
              <motion.div
                key={index}
                variants={categoryVariants[categoryType]}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col lg:flex-row items-start gap-8 p-6 hover:bg-dark-300/30 rounded-xl transition duration-300 border border-transparent hover:border-pink-500/20"
              >
                {/* Skill Category */}
                <div className="lg:w-1/4">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <motion.div
                      variants={iconVariants[categoryType]}
                      initial="initial"
                      whileHover="hover"
                      animate="animate"
                    >
                      <skill.icon className="w-8 h-8 text-pink-500 mr-4" />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold text-white"
                      whileHover={{ color: "#ec4899" }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="lg:w-3/4">
                  <div className="flex flex-wrap gap-3">
                    {skill.tags.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={tagVariants[categoryType]}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-4 py-2 bg-dark-400 border border-gray-700 text-gray-300 rounded-lg text-sm cursor-pointer shadow-lg"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 }
          }}
          className="max-w-4xl mx-auto mt-16 p-8 bg-dark-300/50 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 backdrop-blur-sm"
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-6 text-center"
            animate={{
              textShadow: [
                "0 0 0px rgba(236, 72, 153, 0)",
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 0px rgba(236, 72, 153, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Development Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-lg bg-dark-400/50 hover:bg-dark-400/70 transition duration-300"
            >
              <h4 className="text-lg font-semibold text-pink-500 mb-3 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  🔗
                </motion.span>
                API Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {["RESTful APIs", "CRUD Operations", "JWT Authentication"].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(236, 72, 153, 0.1)"
                    }}
                    className="px-3 py-1 bg-dark-400 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-pink-500 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-lg bg-dark-400/50 hover:bg-dark-400/70 transition duration-300"
            >
              <h4 className="text-lg font-semibold text-pink-500 mb-3 flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🛠️
                </motion.span>
                Tools & Others
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Git", "GitHub", "Postman", "VS Code", "Figma"].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      x: 5,
                      backgroundColor: "rgba(236, 72, 153, 0.1)"
                    }}
                    className="px-3 py-1 bg-dark-400 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-pink-500 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;