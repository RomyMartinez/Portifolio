import { Title } from "./UI/Title";
import Romy from "../assets/Romy.jpg";

export function About() {
  return (
    <section
      id="about"
      className="h-full w-full bg-white flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex items-center">
        <div className="w-full">
          <div className="text-center mb-16">
            <Title title="About Me" extraClass="mb-4" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha jornada e paixão pela tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Desenvolvedor Full-Stack Apaixonado
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Full-Stack Developer passionate about learning new
                  technologies and staying up to date with the latest trends in
                  the field. Currently pursuing degrees at both IFF and Estácio,
                  I still dedicate time to continuously improving my skills and
                  expanding my technical knowledge.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  One of my strengths is my constant self-reflection—always
                  analyzing my abilities and seeking ways to improve in order to
                  achieve my goals. I maintain a proactive mindset and strong
                  adaptability, thriving in dynamic environments where I can
                  test my knowledge and learn quickly.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Above all, I value clean code, well-structured code and
                  consistently applying SOLID principles to ensure efficiency,
                  scalability, and maintainability.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                    2+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                    1
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Projeto Concluído
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                    12+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Tecnologias Dominadas
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-sm w-full">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-20"></div>

                {/* Main image container */}
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl hover-lift">
                  <img
                    className="rounded-2xl w-full h-auto object-cover"
                    src={Romy}
                    alt="Romy Manuel Martinez Nava"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 md:w-6 md:h-6 bg-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
