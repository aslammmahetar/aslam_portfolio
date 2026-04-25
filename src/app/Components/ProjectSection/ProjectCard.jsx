import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Star } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const gradients = [
    "from-purple-500/20 via-pink-500/20 to-red-500/20",
    "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
  ];

  const borderGradients = [
    "hover:border-purple-500/50",
    "hover:border-blue-500/50",
    "hover:border-orange-500/50",
    "hover:border-green-500/50",
    "hover:border-indigo-500/50",
  ];

  const techColors = [
    "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "bg-green-500/10 text-green-400 border-green-500/30",
    "bg-orange-500/10 text-orange-400 border-orange-500/30",
    "bg-pink-500/10 text-pink-400 border-pink-500/30",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`group relative p-6 rounded-2xl backdrop-blur-xl bg-linear-to-br ${
        gradients[index % gradients.length]
      } 
        bg-card/50 border-2 ${borderGradients[index % borderGradients.length]} 
        hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300
        before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-r before:from-transparent 
        before:via-white/10 before:to-transparent before:translate-x-full before:group-hover:translate-x-full 
        before:transition-transform before:duration-1000 overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="w-4 h-4 text-yellow-400" />
      </div>

      <div className="absolute -top-10 -right-10 w-20 h-20 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

      {/* Image Container */}
      <div className="relative mb-5 overflow-hidden rounded-xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-1/2 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 mx-auto"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-4 flex-col justify-around h-full">
        <motion.h4
          className="text-xl font-bold mb-2 bg-linear-to-r text-primary bg-clip-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {project.title}
        </motion.h4>

        {/* Description */}
        <motion.p
          className="text-sm text-primary mt-2 leading-relaxed "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`text-xs px-3 py-1.5 rounded-full border font-mono ${
                techColors[i % techColors.length]
              } 
              backdrop-blur-sm transition-all duration-200`}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="mt-6 flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
        >
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
            bg-linear-to-r from-primary to-primary/80 text-primary text-sm font-semibold 
            shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300
            relative overflow-hidden group/btn"
          >
            <span className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
            <ExternalLink size={16} className="relative z-10" />
            <span className="relative z-10">Live Demo</span>
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
            border border-gray-600 bg-white/5 hover:bg-white/10 text-primary text-sm font-semibold 
            backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
          >
            <Code2 size={16} />
            Code
          </motion.a>
        </motion.div>

        {/* Rating indicator */}
        <motion.div
          className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.7 }}
        >
          {/* <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span>Featured Project</span>
        </div> */}
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-primary/50" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
