import { GithubLinkendin } from "./GithubLinkedin";

interface ContactInfoProps {
  isCopy: boolean;
  handleCopy: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ContactInfo({ isCopy, handleCopy }: ContactInfoProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover-lift border border-gray-100">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Informações de Contato
      </h3>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-800 font-medium truncate">
              ngcsmrtnz@gmail.com
            </p>
          </div>
          <button
            onClick={handleCopy}
            className={`ml-auto px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 flex-shrink-0 ${
              isCopy
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
            disabled={isCopy}
          >
            {isCopy ? "Copiado!" : "Copiar"}
          </button>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-gray-500">Telefone</p>
            <p className="text-gray-800 font-medium">
              +55 22 99937-1942
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-gray-500">Localização</p>
            <p className="text-gray-800 font-medium">
              Rio de Janeiro, Brasil
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Redes Sociais</p>
        <GithubLinkendin />
      </div>
    </div>
  );
}
