class Questao {
    

    constructor(enunciado,alternativas,resposta){
        this.enunciado=enunciado;
        this.alternativas=alternativas;
        this.resposta=resposta;
    }

}
var questoes=[],enunciado, alternativas,resposta,questao;


enunciado = 'Qual alternativa não é uma estrutura de repetição:';
alternativas = [
'a) For',
'b) While',
'c) Switch',
'd) do-While'
];
resposta = '3'//letra c
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = "O que o seguinte pseudocódigo faz?\nint soma1 = 5\nint soma2 = 7\nint total = 0\n\tfor (int i = 0, i < soma2, i++) {\n\ttotal += soma1\n\t}\nSystem.out.println(total)\n}";
alternativas = [
    'a) soma',
    'b) divisão',
    'c) subtração',
    'd) multiplicação',
];
resposta = '3'//letra c
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = 'Qual alternativa não é uma estrutura de repetição:';
alternativas = [
    'a) For',
    'b) While',
    'c) Switch',
    'd) do-While'
];
resposta = '4'//letra 
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);


enunciado = 'considerando A=10, B=7 e C=6, assinale a opção que contém a relação correta:';
alternativas = [
    'a) (A + 3) > (B + C) ',
    'b) ((B + A) > (C + C) AND (A ! C) < (B ! A))',
    'c) ((A + C) < (B * 2) OR (C + B * 3) < (A * 3))', 
    'd) (C * 3) <= (3 + C * 2)'
    
];
resposta = '3'//letra c
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = 'Sendo a e b variáveis inteiras em um programa, a expressão lógica\nNÃO ((a > b) OU (a = b))\né equivalente a:';
alternativas = [
    'A)(a < b);',
    'B)(a >= b);',
    'C)(a <= b);',
    'D)(a > b);'
    
];
resposta = '1'//letra a
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = 'Analise o seguinte código:\nint a=2;\nswitch (a):\n\tcase 1:\n\t\tprint(“dois”);\n\tcase 2:\n\t\tprint(“tres”);\n\tcase 3:\n\t\tprint(“um”);\n\tdefault:\n\t\tprint(“nani?”);';
alternativas = [
   'a) Esse código entrará apenas no case 2',
   'b) Esse código entrará em todos os casos',
   'c) Esse código entrará nos casos 2 em diante',
   'd) Esse código entrará nos casos 2 em diante sem entrar no default'
];
resposta = '3'//letra c
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);


enunciado = 'Considere o sequinte código\nINICIO\nINTEIRO J, X;\nJ=1;\nX=2;\nENQUANTO J<10 FAÇA\n\tX=X+1;\nJ=J+2;FIM ENQUANTO;\nIMPRIMA X;\nIMPRIMA J;\n\nAo final da execução do trecho de código acima, os valores de X e J são iguais, respectivamente, a:';
alternativas = [
    'a) 7 e 11.',
    'b) 6 e 12.',
    'c) 8 e 11.',
    'd) 9 e 12.'
];
resposta = '1'//letra a
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = 'Considere o seguinte pseudocódigo:\nFunção misteriosa(a: inteiro)\nInício\nSe (a<1) então retorna -1;\nSe (a==1) então retorna 2;\nSe (a>1) então retorna (misteriosa(a-1)* misteriosa(a-2));\nFim\n\nSe colocarmos essa função pra executar 3 vezes, passando os seguintes valores 1, 3 e 4. Quais serão os valores retornados respectivamente:';
alternativas = [
    'A) 2, -4 e 8.',
    'B) -4, 2 e 16.',
    'C) 2, 6 e 8.',
    'D) 2, -2 e 4.'
    
];
resposta = '1'//letra a
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);


enunciado = 'Analise o pseudocódigo mostrado a seguir.\nfunction f(n: inteiro) : inteiro\nbegin\n\tif n = 1\n\t\tthen return(1)\n\telse return(n+f (n-1))\nend \nO resultado retornado pela expressão f(10) é:';
alternativas = [
    'A) 10',
    'b) 11',
    'c) 34',
    'd) 55'
    
];
resposta = '4'//letra d
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = 'Em relação aos comandos em pseudocódigo correspondentes às estruturas de decisão e repetição dos algoritmos, correlacione as colunas a seguir:\n\nComando (pseudocódigo)\tEstrutura de decisão/repetição\nI. Se...então\t( ) Estrutura de repetição com teste no final\nII. Escolha... Caso\t( ) Estrutura de seleção simples\nIII. Repita...Até\t( ) Estrutura de repetição com variável de controle\nIV. Para...Até...Faça\t( ) Estrutura de seleção de múltipla escolha\n\nA sequência CORRETA, de cima para baixo, é:';
alternativas = [
    'A II, I, III, IV.',
    'B III, II, IV, I.',
    'C III, I, IV, II.', 
    'D IV, I, III, II.'
    
];
resposta = '3'//letra c
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);

enunciado = ' Considere o pseudocódigo abaixo.\nFunção teste(inteiro a, inteiro b): inteiro\n\tvar x: inteiro\nInício\n\tx ← a\n\ta ← b\n\tb ← x\n\tretorna (b * (x + a) / 2)\nFim.\nAlgoritmo Principal\nvar a, b: inteiro \nInício\n\tLeia (a, b)\n\timprima (teste(a,b))\nFim\nConsiderando que a e b receberam, respectivamente, os valores 4 e 3, conclui-se que será impresso o valor';
alternativas = [
    'A 19.',
    'B 17.',
    'C 28.',
    'D 14.'
];
resposta = '4'//letra d
var q = new Questao(enunciado,alternativas,resposta);
questoes.push(q);
//for(var k=0;k<questoes.length;k++)
//    console.log(questoes[k].resposta)