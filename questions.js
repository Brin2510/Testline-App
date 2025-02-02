// creating an array and passing the number, questions, options, and answers
let questions = [
  {
      numb: 1,
      question: "What does DNA stand for?",
      answer: "Deoxyribonucleic acid",
      options: [
          "Deoxyribonucleic acid",
          "Deoxyribonuclease acid",
          "Dioxyribonucleic acid",
          "Deoxyribosenucleic acid"
      ]
  },
  {
      numb: 2,
      question: "What is the primary function of DNA?",
      answer: "Storing genetic information",
      options: [
          "Storing genetic information",
          "Protein synthesis",
          "Energy production",
          "Cell signaling"
      ]
  },
  {
      numb: 3,
      question: "What is the basic structural unit of DNA?",
      answer: "Nucleotide",
      options: [
          "Amino acid",
          "Nucleotide",
          "Fatty acid",
          "Monosaccharide"
      ]
  },
  {
      numb: 4,
      question: "Which of the following bases is NOT found in DNA?",
      answer: "Uracil",
      options: [
          "Adenine",
          "Guanine",
          "Cytosine",
          "Uracil"
      ]
  },
  {
      numb: 5,
      question: "What type of bond holds the two strands of DNA together?",
      answer: "Hydrogen bonds",
      options: [
          "Covalent bonds",
          "Ionic bonds",
          "Hydrogen bonds",
          "Peptide bonds"
      ]
  },
  {
      numb: 6,
      question: "What is the shape of a DNA molecule?",
      answer: "Double helix",
      options: [
          "Single helix",
          "Double helix",
          "Triple helix",
          "Linear"
      ]
  },
  {
      numb: 7,
      question: "What does RNA stand for?",
      answer: "Ribonucleic acid",
      options: [
          "Ribonucleic acid",
          "Ribonuclease acid",
          "Riboxyribonucleic acid",
          "Ribonucleosic acid"
      ]
  },
  {
      numb: 8,
      question: "What is the primary function of mRNA?",
      answer: "Carrying genetic information from DNA to ribosomes",
      options: [
          "Carrying genetic information from DNA to ribosomes",
          "Storing genetic information",
          "Catalyzing chemical reactions",
          "Transporting molecules"
      ]
  },
  {
      numb: 9,
      question: "Which of the following bases is found in RNA but NOT in DNA?",
      answer: "Uracil",
      options: [
          "Adenine",
          "Guanine",
          "Cytosine",
          "Uracil"
      ]
  },
  {
      numb: 10,
      question: "What is the shape of an RNA molecule?",
      answer: "Single-stranded",
      options: [
          "Single-stranded",
          "Double helix",
          "Triple helix",
          "Linear"
      ]
  },
  {
      numb: 11,
      question: "What is the process of making an RNA copy of a DNA sequence called?",
      answer: "Transcription",
      options: [
          "Replication",
          "Transcription",
          "Translation",
          "Mutation"
      ]
  },
  {
      numb: 12,
      question: "Where does transcription occur in eukaryotic cells?",
      answer: "Nucleus",
      options: [
          "Cytoplasm",
          "Nucleus",
          "Ribosomes",
          "Golgi apparatus"
      ]
  },
  {
      numb: 13,
      question: "What is the process of making a protein from an RNA sequence called?",
      answer: "Translation",
      options: [
          "Replication",
          "Transcription",
          "Translation",
          "Mutation"
      ]
  },
  {
      numb: 14,
      question: "Where does translation occur in eukaryotic cells?",
      answer: "Ribosomes",
      options: [
          "Cytoplasm",
          "Nucleus",
          "Ribosomes",
          "Golgi apparatus"
      ]
  },
  {
      numb: 15,
      question: "What type of RNA carries amino acids to the ribosome during translation?",
      answer: "tRNA",
      options: [
          "mRNA",
          "tRNA",
          "rRNA",
          "snRNA"
      ]
  }
];
// you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
