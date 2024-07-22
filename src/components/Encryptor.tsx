import React, { useState, useCallback } from 'react';
import { Toaster, toast } from 'sonner';

const encriptar = (text: string): string => {
  const replacements: Record<string, string> = {
    'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'
  };
  return text.replace(/[eiaou]/g, char => replacements[char]);
};

const desencriptar = (text: string): string => {
  const replacements: Record<string, string> = {
    'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u'
  };
  return text.replace(/enter|imes|ai|ober|ufat/g, match => replacements[match]);
};

const Encryptor: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const validateInput = (text: string): boolean => {
    return /^[a-z\s]*$/.test(text);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (validateInput(newValue)) {
      setInput(newValue);
    } else {
      toast.error('Solo se permiten letras minúsculas sin acentos', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  const handleEncrypt = useCallback(() => {
    setOutput(encriptar(input));
  }, [input]);

  const handleDecrypt = useCallback(() => {
    setOutput(desencriptar(input));
  }, [input]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output)
      .then(() => {
        toast.success('Texto copiado al portapapeles', {
          duration: 4000,
          position: 'top-right',
        });
      })
      .catch(err => {
        console.error('Error al copiar:', err);
        toast.error('Error al copiar el texto', {
          duration: 4000,
          position: 'top-right',
        });
      });
  }, [output]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gray-100 flex flex-col">
      <Toaster richColors/>
      <div className="max-w-10xl mx-500 flex flex-col flex-grow">
        <header className="mb-6">
          <img src="../../public/logo.png" alt="Logo" className="w-auto h-8" />
        </header>
        <main className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 flex-grow">
          <div className="flex-grow flex flex-col bg-white rounded-lg shadow-lg p-6">
            <textarea
              className="w-full flex-grow p-4 bg-transparent rounded-md resize-none mb-4 text-blue-900 text-lg focus:outline-none"
              placeholder="Ingrese el texto aqui"
              value={input}
              onChange={handleInputChange}
              style={{ minHeight: '200px' }} // Asegura una altura mínima
            />
            <p className="text-sm text-gray-500 mb-4 flex items-center">
              <span className="inline-block align-middle mr-1">ℹ️</span>
              Solo letras minúsculas y sin acentos
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleEncrypt}
                className="bg-blue-900 text-white px-6 py-3 rounded-md w-full sm:w-auto"
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
          <aside className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 flex flex-col">
            {output ? (
              <div className="flex flex-col h-full">
                <textarea
                  className="w-full flex-grow p-4 bg-transparent rounded-md resize-none mb-4 text-blue-900 text-lg focus:outline-none"
                  value={output}
                  readOnly
                  style={{ minHeight: '200px' }} // Asegura una altura mínima
                />
                <button
                  onClick={handleCopy}
                  className="bg-blue-900 text-white px-6 py-3 rounded-md w-full mt-auto"
                >
                  Copiar
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img src="../../public/muñeco.png" alt="Ningún mensaje" className="w-64 h-auto mb-4" />
                <h2 className="text-2xl font-bold text-center mb-4">
                  Ningún mensaje fue encontrado
                </h2>
                <p className="text-center text-gray-500">
                  Ingresa el texto que desees encriptar o desencriptar.
                </p>
              </div>
            )}
          </aside>
        </main>
      </div>
    </div>
    
  );
};

export default Encryptor;