
const Allclubs = () => {
    const cards = [
      { title: 'Chaaya', description: 'The Film Club Of CBIT', image: '/logos/ChaayaLOGO.jpg' },
      { title: 'Placement Cell', description: 'The department for managing placements', image: '/logos/PlacementLogo.png' },
      { title: 'SATARC', description: 'उत्तमः आक्रमणः उत्तमः रक्षणः', image: '/logos/SATARClogo.jpg' },
      { title: 'EWB', description: 'Non-Governmental Organization (NGO)\nAlone we can do little; together we can do so much', image: '/logos/EWBlogo.jpg' },
      { title: 'GDSC', description: 'Let us connect, learn, and grow together', image: '/logos/GDSClogo.jpg' },
      { title: 'Toast Masters', description: 'Where leaders are made.', image: '/logos/ToastmastersLOGO.jpg' },
      { title: 'Chaitanya Srujana', description: 'Arts & Crafts club of CBIT 🎨🖌️', image: '/logos/SrujanaLOGO.jpg' },
      { title: 'ELC', description: 'Electoral Literacy Club', image: '/logos/ELClogo.jpg' },
      { title: 'Chaitanya Samskruthi', description: 'The Cultural & Literary Club of CBIT', image: '/logos/SamskruthiLOGO.jpg' },
      { title: 'Chaitanaya Kreeda', description: 'Sports club - CBIT', image: '/logos/KreedaLogo.jpg' },
      { title: 'Chaitanaya Geethi', description: 'The vocalist club of CBIT, Hyderabad 🎶', image: '/logos/GeethiLOGO.jpg' },
      { title: 'Communicando', description: 'Literary Arts-Literary brains at work.', image: 'logos/CommunicandoLOGO.jpg' },
      { title: 'NSS', description: 'CBIT- National Service Scheme Nonprofit organization', image: '/logos/NSSlogo.jpg' },
      { title: 'Chaitanya Spandana', description: 'Fall into the loop of service. Service club of CBIT.', image: '/logos/SpandanaLOGO.jpg'},
      { title: 'Trancsendent', description: 'A writers collective', image:  '/logos/Transcendent.jpg'},
      { title: 'IEEE', description: 'IEEE CBIT Student Branch', image: '/logos/IEEElogo.jpg' },
      { title: 'CPC', description: 'CBIT Photography Club (CPC)', image: '/logos/CPClogo.jpg' },
      { title: 'MUN', description: 'CBIT Model United Nations', image: '/logos/MUNlogo.jpg' },
      { title: 'Writers & Poets Club', description: 'Poetic Justice to the world of words', image: '/logos/WPClogo.jpg'},
      { title: 'COSC', description: 'CBIT Open Source Community', image: '/logos/LogoCOSC.png' },
      { title: 'Mathematics Club', description: 'The official mathematics club of CBIT.', image: '/logos/RMClogo.jpg' },
      { title: 'Astra', description: 'CBIT Space Program: CBITs 🚀🛰🛩☄️club!', image: '/logos/AstraLOGO.jpg' },
      { title: 'head Start', description: 'Official club of CSE department', image: '/logos/Headstart.jpg' },
      { title: 'R&I Club', description: 'Robotics and Innovation Club of CBIT.', image: '/logos/R&I.jpg' },
      { title: 'Neural Nexus', description: 'Connecting brains and machines for a better future.', image: '/logos/NeuralNexus.jpg' },
    ];
  
    return (
      <div className="p-4 min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded-t-lg mb-3" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Allclubs;