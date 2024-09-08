import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StarryBackground from '../components/StarryBackground';
import FloatingLogo from '../components/FloatingLogo';

const Index = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Roboto, Arial, sans-serif';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
  };

  const handleCopyToClipboard = () => {
    const text = `Barrio Verde Grow
Dirección: 123 Calle Principal, Ciudad, País
Horarios: Lun - Sáb: 10:30 - 19:30, Dom: Cerrado
Teléfono: +1 234 567 890
Email: info@barrioverde.com`;
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Datos copiados al portapapeles');
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8 bg-black text-white">
      <StarryBackground />
      <FloatingLogo />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .store-button, .social-button {
          text-decoration: none;
          color: #000000;
          padding: 10px 20px;
          margin: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
          font-weight: bold;
          text-transform: uppercase;
          background-color: #4CAF50;
          border: 2px solid #4CAF50;
          box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);
          transition: all 0.2s ease;
          font-size: 0.8rem;
        }
        .store-button {
          width: 100%;
        }
        .store-button:hover, .social-button:hover {
          background-color: #45a049;
          box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
        }
        .store-button:active, .social-button:active {
          transform: scale(0.98);
          background-color: #4CAF50;
        }
        @media (min-width: 640px) {
          .store-button, .social-button {
            font-size: 1rem;
            padding: 12px 25px;
          }
        }
      `}</style>

      {!selectedStore ? (
        <div className="text-center relative z-10 w-full max-w-md" style={{ animation: 'fadeIn 1.5s forwards' }}>
          <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-8 font-bold text-shadow">Barrio Verde Grow 🌱</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="store-button w-full sm:w-48 bg-[#4CAF50] text-[#000000] hover:bg-[#45a049]" onClick={() => handleStoreSelect('main')}>
              Explorar Tienda
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center w-full max-w-md p-4 relative z-10" style={{ animation: 'fadeIn 1.5s forwards' }}>
          <h2 className="text-xl sm:text-3xl mb-4 sm:mb-6 font-bold">Barrio Verde Grow 🌱</h2>
          <div className="mb-6 text-left">
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 font-semibold">Información de Contacto</h3>
            <p className="text-xs sm:text-base whitespace-pre-line">
              Dirección: 123 Calle Principal, Ciudad, País<br />
              Horarios: Lun - Sáb: 10:30 - 19:30, Dom: Cerrado<br />
              Teléfono: +1 234 567 890<br />
              Email: info@barrioverdegrow.com
            </p>
            <Button className="social-button mt-4 w-full text-xs sm:text-base bg-[#4CAF50] text-[#000000] hover:bg-[#45a049]" onClick={handleCopyToClipboard}>
              Copiar datos de contacto
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
            <Button 
              className="social-button text-xs sm:text-base bg-[#4CAF50] text-[#000000] hover:bg-[#45a049]"
              onClick={() => window.open('https://wa.me/c/56949432698')}
            >
              <Phone className="mr-2" /> WhatsApp
            </Button>
            <Button 
              className="social-button text-xs sm:text-base bg-[#4CAF50] text-[#000000] hover:bg-[#45a049]"
              onClick={() => window.open('https://www.instagram.com/barrioverdegrow.cl/', '_blank')}
            >
              <Instagram className="mr-2" /> Instagram 🌱
            </Button>
            <Button
              className="social-button text-xs sm:text-base bg-[#4CAF50] text-[#000000] hover:bg-[#45a049]"
              onClick={() => toast.info("Lun - Sáb: 10:30 - 19:30\nDomingo: Cerrado")}
            >
              <Clock className="mr-2" /> Horarios
            </Button>
            <Button
              className="social-button text-xs sm:text-base bg-[#4CAF50] text-[#000000] hover:bg-[#45a049]"
              onClick={() => window.open('https://www.google.com/maps/place/Barrio+Verde+Growshop/@-33.0433154,-71.3764096,17z/data=!3m1!4b1!4m6!3m5!1s0x9689d783ab187a71:0x4ef9c1b7e75c1ec3!8m2!3d-33.0433154!4d-71.3738347!16s%2Fg%2F11c605n8_2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
            >
              <MapPin className="mr-2" /> Ubicación
            </Button>
          </div>
        </div>
      )}

      <Button
        className="absolute top-4 right-4 bg-[#4CAF50] text-[#000000] hover:bg-[#45a049] px-2 py-1 sm:px-4 sm:py-2 rounded-full transition-all z-20 text-xs sm:text-base"
        onClick={() => setSelectedStore(null)}
      >
        Volver al Inicio
      </Button>
    </div>
  );
};

export default Index;
