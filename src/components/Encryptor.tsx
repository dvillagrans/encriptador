import React, { useState, useCallback } from 'react';

const encriptar = (text: string): string => {
  const replacements: Record<string, string> = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  return text.replace(/[eiaou]/g, char => replacements[char]);
};

const desencriptar = (text: string): string => {
  const replacements: Record<string, string> = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  return text.replace(/enter|imes|ai|ober|ufat/g, match => replacements[match]);
};

const Encryptor: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncrypt = useCallback(() => {
    setOutput(encriptar(input));
  }, [input]);

  const handleDecrypt = useCallback(() => {
    setOutput(desencriptar(input));
  }, [input]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output)
      .then(() => alert('Texto copiado al portapapeles'))
      .catch(err => console.error('Error al copiar:', err));
  }, [output]);

  const isEmpty = output === '';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <img src="logo.png" alt="Logo" className="w-auto h-auto" />
        </header>
        <main className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-grow flex flex-col">
            <textarea
              className="w-full flex-grow p-4 bg-transparent rounded-md resize-none mb-4 custom-textarea"
              placeholder="Ingrese el texto aqui"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <p className="text-sm text-gray-500 mb-4">
              <span className="inline-block align-middle mr-1">ℹ️</span>
              Solo letras minúsculas y sin acentos
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleEncrypt}
                className="bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto"
              >
                Encriptar
              </button>
              <button
                onClick={handleDecrypt}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md w-full sm:w-auto"
              >
                Desencriptar
              </button>
            </div>
          </div>
          <aside className="w-full md:w-96 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            {isEmpty ? (
              <div id="emptyState">
                <img src="muñeco.png" alt="Icono" className="w-auto h-auto mb-6" />
                <h2 className="text-2xl font-bold text-center mb-4">
                  Ningún mensaje fue encontrado
                </h2>
                <p className="text-center text-gray-500">
                  Ingresa el texto que desees encriptar o desencriptar.
                </p>
              </div>
            ) : (
              <div id="resultState" className="w-full">
                <textarea
                  className="w-full flex-grow p-4 bg-transparent rounded-md resize-none mb-4 custom-textarea"
                  value={output}
                  readOnly
                />
                <button
                  onClick={handleCopy}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md w-full"
                >
                  Copiar
                </button>
              </div>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Encryptor;