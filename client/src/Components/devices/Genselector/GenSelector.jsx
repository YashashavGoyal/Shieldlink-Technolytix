import React, { useState } from 'react';
import Gen1 from '../gen1/Gen1'; // Import the Gen1 component
import './GenSelector.css'; // Styles for the selector boxes

// Images for the different gens (replace with actual image paths)
import gen2Img from '../../../assets/images/Lora.png';
import gen3Img from '../../../assets/images/Lora.png';
import gen4Img from '../../../assets/images/Lora.png';
import gen5Img from '../../../assets/images/Lora.png';

const genData = {
  gen2: {
    content: "Gen 2 is a leap forward in design, offering greater precision.",
    image: gen2Img,
  },
  gen3: {
    content: "Gen 3 combines innovation with ease of use for everyday tasks.",
    image: gen3Img,
  },
  gen4: {
    content: "Gen 4 offers unmatched performance with a sleek design.",
    image: gen4Img,
  },
  gen5: {
    content: "Gen 5 is the pinnacle of technology, setting new standards.",
    image: gen5Img,
  },
};

function GenSelector() {
  const [selectedGen, setSelectedGen] = useState('gen2'); // Default to gen2

  const handleGenClick = (gen) => {
    setSelectedGen(gen); // Update the selected generation
  };

  return (
    <div className="GenSelector">
      {/* Render the Gen1 component with the selected generation's content and image */}
      <Gen1
        content={genData[selectedGen].content}
        image={genData[selectedGen].image}
      />

      {/* Small boxes for selecting gens */}
      <div className="genBoxContainer">
        <div className="genBox" onClick={() => handleGenClick('gen2')}>
          <img src={gen2Img} alt="Gen 2" />
          <span>Gen 2</span>
        </div>
        <div className="genBox" onClick={() => handleGenClick('gen3')}>
          <img src={gen3Img} alt="Gen 3" />
          <span>Gen 3</span>
        </div>
        <div className="genBox" onClick={() => handleGenClick('gen4')}>
          <img src={gen4Img} alt="Gen 4" />
          <span>Gen 4</span>
        </div>
        <div className="genBox" onClick={() => handleGenClick('gen5')}>
          <img src={gen5Img} alt="Gen 5" />
          <span>Gen 5</span>
        </div>
      </div>
    </div>
  );
}

export default GenSelector;
