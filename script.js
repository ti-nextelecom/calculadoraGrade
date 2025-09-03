

function alternarCalculadoraGrade() {
      const dropdownGrade = document.getElementById('dropdownGrade').value;

      // Oculta todas as calculadoras
      document.querySelectorAll('.calculadoraGrade').forEach(calcGrade => {
        calcGrade.classList.remove('active');
      });

      // Exibe a calculadora selecionada
      const calculadoraSelecionadaGrade = document.getElementById(dropdownGrade);
      calculadoraSelecionadaGrade.classList.add('active');
    }

     // Exibe a primeira calculadora por padrão
     document.getElementById('calcGrade1').classList.add('active');

     // Calculadora 1000MB

    function calcularGrade1000() {
      const descontoGrade = document.getElementById('descontoGrade1000').value;

      const ubookGrade1000 = 0.1194;
      const streamingTVGrade1000 = 0.2884;
      const kindleGrade1000 = 0.1328;
      const leveducaGrade1000 = 0.0260;
      const comunicacaoMultimidiaGrade1000 = 0.3000;
      const standardGrade1000 = 0.1334;
      
      //const nexConectaIP1000 = 0.465;
      //const leveduca1000 = 0.04;
      
      const resultadoUbookGrade1000 = (parseFloat(descontoGrade)*ubookGrade1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTVGrade1000 = (parseFloat(descontoGrade)*streamingTVGrade1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoKindleGrade1000 = (parseFloat(descontoGrade)*kindleGrade1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoLeveducaGrade1000 = (parseFloat(descontoGrade)*leveducaGrade1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidiaGrade1000 = (parseFloat(descontoGrade)*comunicacaoMultimidiaGrade1000).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandardGrade1000 = (parseFloat(descontoGrade)*standardGrade1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP1000 = (parseFloat(desconto)*nexConectaIP1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca1000 = (parseFloat(desconto)*leveduca1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo

      document.getElementById('resultadoUbookGrade1000').innerText =  resultadoUbookGrade1000;
      document.getElementById('resultadoStreamingTVGrade1000').innerText =  resultadoStreamingTVGrade1000;
      document.getElementById('resultadoKindleGrade1000').innerText =  resultadoKindleGrade1000;
      document.getElementById('resultadoLeveducaGrade1000').innerText = resultadoLeveducaGrade1000;
      document.getElementById('resultadoComunicacaoMultimidiaGrade1000').innerText = resultadoComunicacaoMultimidiaGrade1000;
      document.getElementById('resultadoStandardGrade1000').innerText = resultadoStandardGrade1000;
      //document.getElementById('resultadoNexConectaIP1000').innerText = resultadoNexConectaIP1000;
      
    }

    function calcularGrade700() {
      const descontoGrade700 = document.getElementById('descontoGrade700').value;

      const ubookGrade700 = 0.1378;
      const streamingTVGrade700 = 0.2250;
      const kindleGrade700 = 0.1532;
      const leveducaGrade700 = 0.03;
      const comunicacaoMultimidiaGrade700 = 0.30;
      const standardGrade700 = 0.1540;
      //const nexConectaIP700 = 0.34;
      
      const resultadoUbookGrade700 = (parseFloat(descontoGrade700)*ubookGrade700).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTVGrade700 = (parseFloat(descontoGrade700)*streamingTVGrade700).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoKindleGrade700 = (parseFloat(descontoGrade700)*kindleGrade700).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoLeveducaGrade700 = (parseFloat(descontoGrade700)*leveducaGrade700).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidiaGrade700 = (parseFloat(descontoGrade700)*comunicacaoMultimidiaGrade700).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandardGrade700 = (parseFloat(descontoGrade700)*standardGrade700).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP500 = (parseFloat(desconto500)*nexConectaIP500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoUbookGrade700').innerText =  resultadoUbookGrade700;
      document.getElementById('resultadoStreamingTVGrade700').innerText =  resultadoStreamingTVGrade700;
      document.getElementById('resultadoKindleGrade700').innerText =  resultadoKindleGrade700; 
      document.getElementById('resultadoLeveducaGrade700').innerText = resultadoLeveducaGrade700;     
      document.getElementById('resultadoComunicacaoMultimidiaGrade700').innerText = resultadoComunicacaoMultimidiaGrade700;
      document.getElementById('resultadoStandardGrade700').innerText = resultadoStandardGrade700;
      //document.getElementById('resultadoNexConectaIP500').innerText = resultadoNexConectaIP500;
      //
    }


    function calcularGrade500() {
      const descontoGrade500 = document.getElementById('descontoGrade500').value;
      
      const ubookGrade500 = 0.1792;
      const streamingTVGrade500 = 0.0824;
      const kindleGrade500 = 0.1992;
      const leveducaGrade500 = 0.0390;      
      const comunicacaoMultimidiaGrade500 = 0.30;
      const standardGrade500 = 0.2002;
      
      //const nexConectaIP500 = 0.34;
      
      const resultadoUbookGrade500 = (parseFloat(descontoGrade500)*ubookGrade500).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTVGrade500 = (parseFloat(descontoGrade500)*streamingTVGrade500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoKindleGrade500 = (parseFloat(descontoGrade500)*kindleGrade500).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });   
      const resultadoLeveducaGrade500 = (parseFloat(descontoGrade500)*leveducaGrade500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});   
      const resultadoComunicacaoMultimidiaGrade500 = (parseFloat(descontoGrade500)*comunicacaoMultimidiaGrade500).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandardGrade500 = (parseFloat(descontoGrade500)*standardGrade500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP500 = (parseFloat(desconto500)*nexConectaIP500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoUbookGrade500').innerText =  resultadoUbookGrade500;
      document.getElementById('resultadoStreamingTVGrade500').innerText =  resultadoStreamingTVGrade500;
      document.getElementById('resultadoKindleGrade500').innerText =  resultadoKindleGrade500;
      document.getElementById('resultadoLeveducaGrade500').innerText = resultadoLeveducaGrade500;
      document.getElementById('resultadoComunicacaoMultimidiaGrade500').innerText = resultadoComunicacaoMultimidiaGrade500;
      document.getElementById('resultadoStandardGrade500').innerText = resultadoStandardGrade500;

      //document.getElementById('resultadoNexConectaIP500').innerText = resultadoNexConectaIP500;
      
    }

    function calcularGrade300() {
      const descontoGrade300 = document.getElementById('descontoGrade300').value;

      const ubookGrade300 = 0.1991;
      const streamingTVGrade300 = 0.0582;
      const kindleGrade300 = 0.2214; 
      const leveducaGrade300 = 0.2213;     
      const comunicacaoMultimidiaGrade300 = 0.3;

      //const standard300 = 0.2225;
      //const nexConectaIP350 = 0.33;
    
      const resultadoUbookGrade300 = (parseFloat(descontoGrade300)*ubookGrade300).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTVGrade300 = (parseFloat(descontoGrade300)*streamingTVGrade300).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoKindleGrade300 = (parseFloat(descontoGrade300)*kindleGrade300).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
      const resultadoLeveducaGrade300 = (parseFloat(descontoGrade300)*leveducaGrade300).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidiaGrade300 = (parseFloat(descontoGrade300)*comunicacaoMultimidiaGrade300).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

      //const resultadoStandard300 = (parseFloat(desconto300)*standard300).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP300 = (parseFloat(desconto300)*nexConectaIP350).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoUbookGrade300').innerText =  resultadoUbookGrade300;
      document.getElementById('resultadoStreamingTVGrade300').innerText =  resultadoStreamingTVGrade300;
      document.getElementById('resultadoKindleGrade300').innerText =  resultadoKindleGrade300;      
      document.getElementById('resultadoLeveducaGrade300').innerText = resultadoLeveducaGrade300;
      document.getElementById('resultadoComunicacaoMultimidiaGrade300').innerText = resultadoComunicacaoMultimidiaGrade300;
      //document.getElementById('resultadoStandardGrade300').innerText = resultadoStandardGrade300;

      //document.getElementById('resultadoNexConectaIP350').innerText = resultadoNexConectaIP350;
      //
    }

    function calcularGrade200() {
      const descontoGrade200 = document.getElementById('descontoGrade200').value;

      const comunicacaoMultimidiaGrade200 = 0.3;
      const ubookGrade200 = 0.2561;
      const streamingTVGrade200 = 0.0748;
      const kindleGrade200 = 0.2847;
      const leveducaGrade200 = 0.0844;
     
      
      
      //const nexConectaIP150 = 0.47;
      //const standard200 = 0.1592;
    
      const resultadoComunicacaoMultimidiaGrade200 = (parseFloat(descontoGrade200)*comunicacaoMultimidiaGrade200).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoUbookGrade200 = (parseFloat(descontoGrade200)*ubookGrade200).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTVGrade200 = (parseFloat(descontoGrade200)*streamingTVGrade200).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoKindleGrade200 = (parseFloat(descontoGrade200)*kindleGrade200).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoLeveducaGrade200 = (parseFloat(descontoGrade200)*leveducaGrade200).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      
      
      //const resultadoStandard200 = (parseFloat(desconto200)*standard200).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      
      //const resultadoNexConectaIP150 = (parseFloat(desconto150)*nexConectaIP150).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca150 = (parseFloat(desconto150)*leveduca150).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo

      document.getElementById('resultadoComunicacaoMultimidiaGrade200').innerText = resultadoComunicacaoMultimidiaGrade200;
      document.getElementById('resultadoUbookGrade200').innerText =  resultadoUbookGrade200;
      document.getElementById('resultadoStreamingTVGrade200').innerText =  resultadoStreamingTVGrade200;
      document.getElementById('resultadoKindleGrade200').innerText =  resultadoKindleGrade200;
      document.getElementById('resultadoLeveducaGrade200').innerText = resultadoLeveducaGrade200;
     
      
      //document.getElementById('resultadoNexConectaIP150').innerText = resultadoNexConectaIP150;
      // document.getElementById('resultadoStandard200').innerText =  resultadoStandard200;
      
    }

    /*function calcular100() {
      const desconto100 = document.getElementById('desconto100').value;

      
      const ubook100 = 0.1;
      const streamingTV100 = 0.093;
      const nexConectaIP100 = 0.457;
      const leveduca100 = 0.05;
      const comunicacaoMultimidia100 = 0.3;

      const resultadoUbook100 = (parseFloat(desconto100)*ubook100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTV100 = (parseFloat(desconto100)*streamingTV100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoNexConectaIP100 = (parseFloat(desconto100)*nexConectaIP100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoLeveduca100 = (parseFloat(desconto100)*leveduca100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia100 = (parseFloat(desconto100)*comunicacaoMultimidia100).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
     

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoUbook100').innerText =  resultadoUbook100;
      document.getElementById('resultadoStreamingTV100').innerText =  resultadoStreamingTV100;
      document.getElementById('resultadoNexConectaIP100').innerText = resultadoNexConectaIP100;
      document.getElementById('resultadoLeveduca100').innerText = resultadoLeveduca100;
      document.getElementById('resultadoComunicacaoMultimidia100').innerText = resultadoComunicacaoMultimidia100;
      
    }*/

  