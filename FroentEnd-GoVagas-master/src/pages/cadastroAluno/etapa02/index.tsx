import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import '../../../components/barraProgresso/style.css';
function cadastrocandidato02() {

    const [idCandidato, setIdCandidato] = useState(0)
    const [candidato, setCandidato] = useState('')
    const [candidatos, setCandidatos] = useState([])

    const [idUsuario, setIdUsuario] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [usuarios, setUsuarios] = useState([])


    const Post = () => {

        const form = {
            habilidade: candidato,
            expertiseCandidato: candidato

        }
        fetch('https://localhost:5001/api/Candidato', {
            method: 'POST',
            body: JSON.stringify(form),
        })
            .then(() => {
                alert('Candidato cadastrado');
                setIdCandidato(0);
                setCandidato('');
            })
            .catch(err => console.error(err));

    }


    return (
        <div className="etapa2candidato">
            <Header />
            <div >
                <div className="titulo-completar">
                    <h1> Cadastro como candidato </h1>

                </div>
                <div className="BarraProgresso">
                    <form id="formulario">
                        <ul id="progress">
                            <li className="ativo">

                            </li>
                            <li className="ativo">

                            </li>
                        </ul>
                    </form>
                </div>

                <div>

                    <div className="cadastro-form">
                        <fieldset>
                            <main>

                                <p>Habilidades</p>
                                <div className="cadastro">
                                    <form onSubmit={event => {
                                        event.preventDefault();
                                        Post();
                                    }}>
                                        <div className="form">

                                            <p>Informe suas habilidades (mínimo 3) e indique  qual experiência você possui em cada uma</p>

                                            <div className="select">
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <label htmlFor="hab">Habilidades:</label>
                                                        <select className="input" name="hab" value={usuario} onChange={a => setUsuario(a.target.value)}>
                                                            <option selected>Escolher...</option>
                                                            <option>SQL SERVER</option>
                                                            <option>MongoBd</option>
                                                            <option>Visual Studio 2019</option>
                                                        </select>
                                                    </div>

                                                    <div className="nivel">
                                                        <label htmlFor="nivel">Nivel:</label>
                                                        <select className="input" name="nivel" value={usuario} onChange={a => setUsuario(a.target.value)} >
                                                            <option selected>Escolher...</option>
                                                            <option>Básico</option>
                                                            <option>Intermediário</option>
                                                            <option>Avançado</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <label htmlFor="hab">Habilidades:</label>
                                                        <select className="input" name="hab" value={usuario} onChange={a => setUsuario(a.target.value)} >
                                                            <option selected>Escolher...</option>
                                                            <option value="46">ABAP</option>
                                                            <option value="47">ABNF</option>
                                                            <option value="48">Ada</option>
                                                            <option value="684">Administrador de sistema</option>
                                                            <option value="727">AdonisJS</option>
                                                            <option value="693">ADVPL</option>
                                                            <option value="694">ADVPL ASP</option>
                                                            <option value="49">Agavi</option>
                                                            <option value="50">Agda</option>
                                                            <option value="51">AgilePHP</option>
                                                            <option value="52">AGS Script</option>
                                                            <option value="53">Ajax</option>
                                                            <option value="54">Akelos</option>
                                                            <option value="55">Alloy</option>
                                                            <option value="56">Alpine Abuild</option>
                                                            <option value="57">AMPL</option>
                                                            <option value="58">Android</option>
                                                            <option value="59">Angular</option>
                                                            <option value="60">Ant Build System</option>
                                                            <option value="61">ANTLR</option>
                                                            <option value="62">Apache</option>
                                                            <option value="63">Apex</option>
                                                            <option value="64">API</option>
                                                            <option value="65">APL</option>
                                                            <option value="66">Apollo Guidance Computer</option>
                                                            <option value="67">AppleScript</option>
                                                            <option value="68">Arc</option>
                                                            <option value="69">Arduino</option>
                                                            <option value="711">ARKit</option>
                                                            <option value="70">AsciiDoc</option>
                                                            <option value="71">ASN.1</option>
                                                            <option value="72">ASP</option>
                                                            <option value="75">AspectJ</option>
                                                            <option value="73">ASP.NET Core</option>
                                                            <option value="74">ASP.NET MVC</option>
                                                            <option value="76">Assembly</option>
                                                            <option value="77">Atomik</option>
                                                            <option value="78">ATS</option>
                                                            <option value="79">Augeas</option>
                                                            <option value="80">Aura</option>
                                                            <option value="81">Aurelia</option>
                                                            <option value="82">AutoHotkey</option>
                                                            <option value="83">AutoIt</option>
                                                            <option value="84">Awk</option>
                                                            <option value="85">AWS EC2 (Elastic Compute Cloud)</option>
                                                            <option value="86">AWS RDS (Relational Database Service)</option>
                                                            <option value="87">AWS S3</option>
                                                            <option value="88">Backbone.js</option>
                                                            <option value="707">Backendless</option>
                                                            <option value="89">Bash</option>
                                                            <option value="90">Batchfile</option>
                                                            <option value="91">Beego</option>
                                                            <option value="92">Befunge</option>
                                                            <option value="93">Big Data</option>
                                                            <option value="94">Bison</option>
                                                            <option value="95">BitBake</option>
                                                            <option value="96">Blade</option>
                                                            <option value="97">BlitzBasic</option>
                                                            <option value="98">BlitzMax</option>
                                                            <option value="99">Bluespec</option>
                                                            <option value="100">Boo</option>
                                                            <option value="726">Bootstrap</option>
                                                            <option value="101">Bottle</option>
                                                            <option value="102">Brainfuck</option>
                                                            <option value="103">Brightscript</option>
                                                            <option value="104">Bro</option>
                                                            <option value="105">Brutos</option>
                                                            <option value="106">C</option>
                                                            <option value="107">C#</option>
                                                            <option value="108">C++</option>
                                                            <option value="109">C2hs Haskell</option>
                                                            <option value="110">Cairngorm</option>
                                                            <option value="111">CakePHP</option>
                                                            <option value="112">Camping</option>
                                                            <option value="113">Cap&#39;n Proto</option>
                                                            <option value="114">Cappuccino</option>
                                                            <option value="115">CartoCSS</option>
                                                            <option value="116">Catalyst</option>
                                                            <option value="117">Ceylon</option>
                                                            <option value="118">CGI::Application</option>
                                                            <option value="119">CGI::Prototype</option>
                                                            <option value="120">Chapel</option>
                                                            <option value="121">Charity</option>
                                                            <option value="122">CherryPy</option>
                                                            <option value="123">ChucK</option>
                                                            <option value="124">Circumflex</option>
                                                            <option value="125">Cirru</option>
                                                            <option value="126">Clarion</option>
                                                            <option value="127">Clean</option>
                                                            <option value="128">ClearPress</option>
                                                            <option value="129">Click</option>
                                                            <option value="130">CLIPS</option>
                                                            <option value="131">Clojure</option>
                                                            <option value="685">Cloud</option>
                                                            <option value="132">CMake</option>
                                                            <option value="133">C-ObjDump</option>
                                                            <option value="134">COBOL</option>
                                                            <option value="135">Cocoon</option>
                                                            <option value="136">CodeIgniter</option>
                                                            <option value="139">CoffeeScript</option>
                                                            <option value="140">ColdFusion</option>
                                                            <option value="141">ColdFusion CFC</option>
                                                            <option value="142">COLLADA</option>
                                                            <option value="143">Common Lisp</option>
                                                            <option value="144">Compojure</option>
                                                            <option value="145">Component Pascal</option>
                                                            <option value="146">CompoundJS</option>
                                                            <option value="147">Conjure</option>
                                                            <option value="148">Cool</option>
                                                            <option value="149">Coq</option>
                                                            <option value="150">Cordova</option>
                                                            <option value="151">Cpp-ObjDump</option>
                                                            <option value="152">Creole</option>
                                                            <option value="153">Crystal</option>
                                                            <option value="154">CSON</option>
                                                            <option value="155">Csound</option>
                                                            <option value="156">Csound Document</option>
                                                            <option value="157">Csound Score</option>
                                                            <option value="158">CSS</option>
                                                            <option value="159">CSV</option>
                                                            <option value="160">Cuba</option>
                                                            <option value="161">Cucumber</option>
                                                            <option value="162">Cuda</option>
                                                            <option value="163">Cutelyst</option>
                                                            <option value="164">Cyclone3</option>
                                                            <option value="165">Cycript</option>
                                                            <option value="166">Cython</option>
                                                            <option value="167">D</option>
                                                            <option value="168">Darcs Patch</option>
                                                            <option value="169">Dart</option>
                                                            <option value="170">Data science</option>
                                                            <option value="171">Delphi</option>
                                                            <option value="698">Demandware</option>
                                                            <option value="710">Design Pattern</option>
                                                            <option value="172">desktop</option>
                                                            <option value="682">Devops</option>
                                                            <option value="173">Diff</option>
                                                            <option value="174">DIGITAL Command Language</option>
                                                            <option value="175">Django</option>
                                                            <option value="176">DM</option>
                                                            <option value="177">DNS Zone</option>
                                                            <option value="178">D-ObjDump</option>
                                                            <option value="179">Docker</option>
                                                            <option value="180">Dockerfile</option>
                                                            <option value="181">Doctrine</option>
                                                            <option value="182">Dogescript</option>
                                                            <option value="183">Dojo</option>
                                                            <option value="184">Dropwizard</option>
                                                            <option value="702">Drupal</option>
                                                            <option value="185">DTrace</option>
                                                            <option value="186">Durandal</option>
                                                            <option value="187">Dylan</option>
                                                            <option value="188">E</option>
                                                            <option value="189">Eagle</option>
                                                            <option value="190">EBNF</option>
                                                            <option value="191">eC</option>
                                                            <option value="192">Ecere Projects</option>
                                                            <option value="193">echo</option>
                                                            <option value="194">ECL</option>
                                                            <option value="195">ECLiPSe</option>
                                                            <option value="196">edn</option>
                                                            <option value="197">Eiffel</option>
                                                            <option value="198">EJB</option>
                                                            <option value="199">EJS</option>
                                                            <option value="200">Elasticsearch</option>
                                                            <option value="201">Eliom</option>
                                                            <option value="202">Elixir</option>
                                                            <option value="203">Elm</option>
                                                            <option value="204">Emacs Lisp</option>
                                                            <option value="205">Ember.js</option>
                                                            <option value="206">EmberScript</option>
                                                            <option value="691">Entity framework</option>
                                                            <option value="207">EQ</option>
                                                            <option value="208">Erlang</option>
                                                            <option value="209">Erlang Web</option>
                                                            <option value="210">ErlyWeb</option>
                                                            <option value="690">ERP</option>
                                                            <option value="725">ES6</option>
                                                            <option value="704">Excel</option>
                                                            <option value="211">Express</option>
                                                            <option value="212">F#</option>
                                                            <option value="213">Factor</option>
                                                            <option value="214">Fancy</option>
                                                            <option value="215">Fantom</option>
                                                            <option value="216">Feathers</option>
                                                            <option value="217">Filebench WML</option>
                                                            <option value="218">Filterscript</option>
                                                            <option value="706">Firebase</option>
                                                            <option value="219">fish</option>
                                                            <option value="220">Flask</option>
                                                            <option value="221">Flatiron</option>
                                                            <option value="222">Flex</option>
                                                            <option value="223">Flight</option>
                                                            <option value="720">Flutter</option>
                                                            <option value="224">FLUX</option>
                                                            <option value="225">Formatted</option>
                                                            <option value="226">Forth</option>
                                                            <option value="227">FORTRAN</option>
                                                            <option value="228">FreeMarker</option>
                                                            <option value="229">Frege</option>
                                                            <option value="230">FuelPHP</option>
                                                            <option value="231">Game Maker Language</option>
                                                            <option value="232">GAMS</option>
                                                            <option value="233">Gantry</option>
                                                            <option value="234">GAP</option>
                                                            <option value="235">GAS</option>
                                                            <option value="236">GCC Machine Description</option>
                                                            <option value="237">G-code</option>
                                                            <option value="238">GDB</option>
                                                            <option value="239">GDScript</option>
                                                            <option value="240">Genshi</option>
                                                            <option value="241">Gentoo Ebuild</option>
                                                            <option value="242">Gentoo Eclass</option>
                                                            <option value="243">Gettext Catalog</option>
                                                            <option value="244">Gin</option>
                                                            <option value="245">Git</option>
                                                            <option value="246">GLSL</option>
                                                            <option value="247">Glyph</option>
                                                            <option value="248">GN</option>
                                                            <option value="249">Gnuplot</option>
                                                            <option value="250">Go</option>
                                                            <option value="251">Golo</option>
                                                            <option value="703">Google Analytics</option>
                                                            <option value="717">Google Cloud</option>
                                                            <option value="252">Google Web Toolkit</option>
                                                            <option value="253">Gosu</option>
                                                            <option value="254">Grace</option>
                                                            <option value="255">Gradle</option>
                                                            <option value="256">Grails</option>
                                                            <option value="257">Grain</option>
                                                            <option value="258">Grammatical Framework</option>
                                                            <option value="259">Graph Modeling Language</option>
                                                            <option value="260">GraphQL</option>
                                                            <option value="261">Graphviz (DOT)</option>
                                                            <option value="262">Groff</option>
                                                            <option value="263">Grok</option>
                                                            <option value="264">Groovy</option>
                                                            <option value="265">Groovy Server Pages</option>
                                                            <option value="266">Gulp</option>
                                                            <option value="267">GWT </option>
                                                            <option value="268">Hack</option>
                                                            <option value="269">Halcyon</option>
                                                            <option value="270">Haml</option>
                                                            <option value="271">Hanami</option>
                                                            <option value="272">Handlebars</option>
                                                            <option value="273">Happstack</option>
                                                            <option value="274">Harbour</option>
                                                            <option value="275">Haskell</option>
                                                            <option value="276">Haxe</option>
                                                            <option value="277">HCL</option>
                                                            <option value="278">Hemlock</option>
                                                            <option value="279">Hibernate</option>
                                                            <option value="280">HLSL</option>
                                                            <option value="281">Horde</option>
                                                            <option value="282">HTML</option>
                                                            <option value="283">HTTP</option>
                                                            <option value="284">Hy</option>
                                                            <option value="285">HybridJava</option>
                                                            <option value="708">Hybris</option>
                                                            <option value="286">HydraMVC</option>
                                                            <option value="287">HyPhy</option>
                                                            <option value="288">IDL</option>
                                                            <option value="289">Idris</option>
                                                            <option value="290">IGOR Pro</option>
                                                            <option value="291">Inform 7</option>
                                                            <option value="292">INI</option>
                                                            <option value="293">Inno Setup</option>
                                                            <option value="294">Io</option>
                                                            <option value="295">Ioke</option>
                                                            <option value="296">Ionic</option>
                                                            <option value="297">iOS</option>
                                                            <option value="298">IRC log</option>
                                                            <option value="719">Ireport</option>
                                                            <option value="299">Isabelle</option>
                                                            <option value="300">Isabelle ROOT</option>
                                                            <option value="301">J</option>
                                                            <option value="303">Jade</option>
                                                            <option value="304">Jasmin</option>
                                                            <option value="718">Jasper</option>
                                                            <option value="305">Java</option>
                                                            <option value="302">JavaEE</option>
                                                            <option value="307">JavaScript</option>
                                                            <option value="308">JavaScriptMVC</option>
                                                            <option value="306">Java Server Pages</option>
                                                            <option value="309">Jenkins </option>
                                                            <option value="310">JFlex</option>
                                                            <option value="311">Jifty</option>
                                                            <option value="312">jQuery</option>
                                                            <option value="313">JSF</option>
                                                            <option value="314">JSON</option>
                                                            <option value="315">JSX</option>
                                                            <option value="316">Julia</option>
                                                            <option value="317">Jupyter Notebook</option>
                                                            <option value="318">Kanban</option>
                                                            <option value="319">KiCad</option>
                                                            <option value="320">Kit</option>
                                                            <option value="321">Koa</option>
                                                            <option value="322">Kohana</option>
                                                            <option value="323">Konstrukt</option>
                                                            <option value="324">Kotlin</option>
                                                            <option value="325">KRL</option>
                                                            <option value="716">kubernetes</option>
                                                            <option value="326">KumbiaPHP</option>
                                                            <option value="327">LabVIEW</option>
                                                            <option value="328">Laravel</option>
                                                            <option value="329">Lasso</option>
                                                            <option value="330">Latte</option>
                                                            <option value="331">Lean</option>
                                                            <option value="332">Lemmachine</option>
                                                            <option value="333">Less</option>
                                                            <option value="334">Lex</option>
                                                            <option value="335">LFE</option>
                                                            <option value="336">Lift</option>
                                                            <option value="337">LilyPond</option>
                                                            <option value="338">Limbo</option>
                                                            <option value="339">Linker Script</option>
                                                            <option value="340">Linux</option>
                                                            <option value="341">Linux Kernel Module</option>
                                                            <option value="342">Liquid</option>
                                                            <option value="343">LiquidLava</option>
                                                            <option value="344">Literate Agda</option>
                                                            <option value="345">Literate CoffeeScript</option>
                                                            <option value="346">Literate Haskell</option>
                                                            <option value="347">Lithium</option>
                                                            <option value="348">LiveScript</option>
                                                            <option value="349">LLVM</option>
                                                            <option value="350">Logos</option>
                                                            <option value="351">Logtalk</option>
                                                            <option value="352">LOLCODE</option>
                                                            <option value="353">LookML</option>
                                                            <option value="354">LoomScript</option>
                                                            <option value="355">LSL</option>
                                                            <option value="356">Lua</option>
                                                            <option value="687">LUMEN</option>
                                                            <option value="357">M</option>
                                                            <option value="358">M4</option>
                                                            <option value="359">M4Sugar</option>
                                                            <option value="360">Machine learning</option>
                                                            <option value="361">Mack</option>
                                                            <option value="362">Magento</option>
                                                            <option value="363">Makefile</option>
                                                            <option value="364">Mako</option>
                                                            <option value="365">Markdown</option>
                                                            <option value="366">Martini</option>
                                                            <option value="367">Mask</option>
                                                            <option value="368">Mason</option>
                                                            <option value="369">Mate</option>
                                                            <option value="370">Mathematica</option>
                                                            <option value="371">Matlab</option>
                                                            <option value="372">Maven POM</option>
                                                            <option value="373">Maveric</option>
                                                            <option value="374">Max</option>
                                                            <option value="375">MAXScript</option>
                                                            <option value="376">MediaWiki</option>
                                                            <option value="377">Merb</option>
                                                            <option value="378">Mercury</option>
                                                            <option value="379">Metal</option>
                                                            <option value="380">Meteor</option>
                                                            <option value="381">MFlow</option>
                                                            <option value="382">miku</option>
                                                            <option value="383">MiniD</option>
                                                            <option value="384">Mirah</option>
                                                            <option value="385">Mithril</option>
                                                            <option value="386">Modelica</option>
                                                            <option value="387">Modula-2</option>
                                                            <option value="388">Module Management System</option>
                                                            <option value="389">Mojolicious</option>
                                                            <option value="390">MongoDB</option>
                                                            <option value="391">Monkey</option>
                                                            <option value="392">Moocode</option>
                                                            <option value="393">MoonScript</option>
                                                            <option value="394">Moustache</option>
                                                            <option value="395">MQL4</option>
                                                            <option value="396">MQL5</option>
                                                            <option value="397">MTML</option>
                                                            <option value="398">MUF</option>
                                                            <option value="399">mupad</option>
                                                            <option value="400">Myghty</option>
                                                            <option value="401">MySQL</option>
                                                            <option value="402">Nancy</option>
                                                            <option value="403">NCL</option>
                                                            <option value="404">Nemerle</option>
                                                            <option value="405">Nerve</option>
                                                            <option value="406">nesC</option>
                                                            <option value="45">.NET</option>
                                                            <option value="407">NetLinx</option>
                                                            <option value="408">NetLinx+ERB</option>
                                                            <option value="409">NetLogo</option>
                                                            <option value="410">NewLisp</option>
                                                            <option value="411">Nginx</option>
                                                            <option value="412">Nimrod</option>
                                                            <option value="413">Ninja</option>
                                                            <option value="414">Nit</option>
                                                            <option value="415">Nitro</option>
                                                            <option value="416">Nix</option>
                                                            <option value="417">NL</option>
                                                            <option value="418">Node.js</option>
                                                            <option value="419">Nodemachine</option>
                                                            <option value="420">Node-router</option>
                                                            <option value="421">Noir</option>
                                                            <option value="681">NoSQL</option>
                                                            <option value="724">NPM</option>
                                                            <option value="422">NSIS</option>
                                                            <option value="423">Nu</option>
                                                            <option value="424">NumPy</option>
                                                            <option value="425">ObjDump</option>
                                                            <option value="426">Objective-C</option>
                                                            <option value="427">Objective-C++</option>
                                                            <option value="428">Objective-J</option>
                                                            <option value="429">OCaml</option>
                                                            <option value="705">Odoo</option>
                                                            <option value="430">Omgrofl</option>
                                                            <option value="431">Ooc</option>
                                                            <option value="432">Opa</option>
                                                            <option value="433">Opal</option>
                                                            <option value="434">OpenCL</option>
                                                            <option value="435">OpenEdge ABL</option>
                                                            <option value="436">OpenRC runscript</option>
                                                            <option value="437">OpenSCAD</option>
                                                            <option value="438">OpenType Feature File</option>
                                                            <option value="439">OpenUI5</option>
                                                            <option value="440">ORACLE</option>
                                                            <option value="441">Orbit</option>
                                                            <option value="442">Org</option>
                                                            <option value="443">Ox</option>
                                                            <option value="444">Oxygene</option>
                                                            <option value="445">Oz</option>
                                                            <option value="446">Pan</option>
                                                            <option value="447">Papyrus</option>
                                                            <option value="448">Parrot</option>
                                                            <option value="449">Parrot Assembly</option>
                                                            <option value="450">Parrot Internal Representation</option>
                                                            <option value="451">Pascal</option>
                                                            <option value="452">PAWN</option>
                                                            <option value="723">PeopleCode</option>
                                                            <option value="453">Perfect</option>
                                                            <option value="454">Perl</option>
                                                            <option value="455">Perl6</option>
                                                            <option value="456">Phalcon</option>
                                                            <option value="457">Phoenix</option>
                                                            <option value="458">PhoneGap</option>
                                                            <option value="695">Photoshop</option>
                                                            <option value="459">PHP</option>
                                                            <option value="460">Pic</option>
                                                            <option value="461">Picard</option>
                                                            <option value="462">Pickle</option>
                                                            <option value="463">PicoLisp</option>
                                                            <option value="464">PigLatin</option>
                                                            <option value="465">Pike</option>
                                                            <option value="466">Play</option>
                                                            <option value="467">PLpgSQL</option>
                                                            <option value="468">PLSQL</option>
                                                            <option value="469">Pod</option>
                                                            <option value="470">PogoScript</option>
                                                            <option value="471">Polymer</option>
                                                            <option value="472">Pony</option>
                                                            <option value="729">POO</option>
                                                            <option value="473">PostgreSQL</option>
                                                            <option value="474">PostScript</option>
                                                            <option value="475">POV-Ray SDL</option>
                                                            <option value="476">PowerBuilder</option>
                                                            <option value="477">PowerShell</option>
                                                            <option value="478">Prado</option>
                                                            <option value="479">Processing</option>
                                                            <option value="688">Progress</option>
                                                            <option value="480">Prolog</option>
                                                            <option value="481">Propeller Spin</option>
                                                            <option value="482">Protocol Buffer</option>
                                                            <option value="483">Public Key</option>
                                                            <option value="484">Puppet</option>
                                                            <option value="486">PureBasic</option>
                                                            <option value="485">Pure Data</option>
                                                            <option value="487">PureMVC</option>
                                                            <option value="488">PureScript</option>
                                                            <option value="489">Pyramid</option>
                                                            <option value="490">Python</option>
                                                            <option value="696">QA - Quality Assurance</option>
                                                            <option value="491">Qcodo</option>
                                                            <option value="492">QCubed</option>
                                                            <option value="699">Qlikview</option>
                                                            <option value="493">QMake</option>
                                                            <option value="494">QML</option>
                                                            <option value="495">Quixote</option>
                                                            <option value="496">R</option>
                                                            <option value="497">Racket</option>
                                                            <option value="498">Ragel in Ruby Host</option>
                                                            <option value="499">Ramaze</option>
                                                            <option value="500">RAML</option>
                                                            <option value="501">Rascal</option>
                                                            <option value="502">Ratpack</option>
                                                            <option value="503">Raw token data</option>
                                                            <option value="504">RDoc</option>
                                                            <option value="505">ReactJS</option>
                                                            <option value="714">React Native</option>
                                                            <option value="506">REALbasic</option>
                                                            <option value="507">Rebol</option>
                                                            <option value="508">Red</option>
                                                            <option value="509">Redcode</option>
                                                            <option value="510">Redis</option>
                                                            <option value="713">Redux</option>
                                                            <option value="511">RenderScript</option>
                                                            <option value="512">Ren&#39;Py</option>
                                                            <option value="513">RESTful</option>
                                                            <option value="514">RestfulX</option>
                                                            <option value="515">Restlet</option>
                                                            <option value="516">reStructuredText</option>
                                                            <option value="517">Revel</option>
                                                            <option value="518">REXX</option>
                                                            <option value="519">RHTML</option>
                                                            <option value="520">Ring</option>
                                                            <option value="521">Riot.js</option>
                                                            <option value="522">RMarkdown</option>
                                                            <option value="523">RobotFramework</option>
                                                            <option value="524">Roma</option>
                                                            <option value="525">Rouge</option>
                                                            <option value="526">RPM Spec</option>
                                                            <option value="528">Ruby on Rails</option>
                                                            <option value="529">Rum</option>
                                                            <option value="530">RUNOFF</option>
                                                            <option value="531">Rust</option>
                                                            <option value="532">Sage</option>
                                                            <option value="533">Sails.js</option>
                                                            <option value="712">Salesforce</option>
                                                            <option value="534">SaltStack</option>
                                                            <option value="535">Salvia</option>
                                                            <option value="689">SAP</option>
                                                            <option value="536">SAS</option>
                                                            <option value="537">Sass</option>
                                                            <option value="538">Scala</option>
                                                            <option value="539">Scalatra</option>
                                                            <option value="540">Scaml</option>
                                                            <option value="541">Scheme</option>
                                                            <option value="542">Scilab</option>
                                                            <option value="686">SCORM</option>
                                                            <option value="543">SCRUM</option>
                                                            <option value="544">SCSS</option>
                                                            <option value="545">Seagull</option>
                                                            <option value="546">seaside</option>
                                                            <option value="715">Selenium</option>
                                                            <option value="547">Self</option>
                                                            <option value="548">servant</option>
                                                            <option value="683">Server</option>
                                                            <option value="701">Sharepoint</option>
                                                            <option value="549">Shell</option>
                                                            <option value="550">Shell Script</option>
                                                            <option value="551">ShellSession</option>
                                                            <option value="552">Shen</option>
                                                            <option value="553">SilverStripe Sapphire</option>
                                                            <option value="554">simplex</option>
                                                            <option value="555">Sin</option>
                                                            <option value="556">Sinatra</option>
                                                            <option value="557">Slash</option>
                                                            <option value="558">Slim</option>
                                                            <option value="559">Smali</option>
                                                            <option value="560">Smalltalk</option>
                                                            <option value="561">Smarty</option>
                                                            <option value="562">SMT</option>
                                                            <option value="563">Snap</option>
                                                            <option value="564">Solar</option>
                                                            <option value="565">SourcePawn</option>
                                                            <option value="566">SPARQL</option>
                                                            <option value="567">Spline Font Database</option>
                                                            <option value="568">Spring</option>
                                                            <option value="569">SproutCore</option>
                                                            <option value="570">SQF</option>
                                                            <option value="571">SQL</option>
                                                            <option value="573">SQLPL</option>
                                                            <option value="572">SQL Server</option>
                                                            <option value="722">SQR</option>
                                                            <option value="574">Squatting</option>
                                                            <option value="575">Squirrel</option>
                                                            <option value="576">SRecode Template</option>
                                                            <option value="577">Stan</option>
                                                            <option value="578">Standard ML</option>
                                                            <option value="579">Stata</option>
                                                            <option value="580">STON</option>
                                                            <option value="581">Stripes</option>
                                                            <option value="582">Struts</option>
                                                            <option value="728">Styled-Components</option>
                                                            <option value="583">Stylus</option>
                                                            <option value="584">Sublime Text Config</option>
                                                            <option value="585">SubRip Text</option>
                                                            <option value="586">SuperCollider</option>
                                                            <option value="587">SVG</option>
                                                            <option value="588">sweetscala</option>
                                                            <option value="589">Swift</option>
                                                            <option value="590">Swiftlet</option>
                                                            <option value="591">Swiz</option>
                                                            <option value="592">Symfony</option>
                                                            <option value="594">SystemVerilog</option>
                                                            <option value="595">Tapestry</option>
                                                            <option value="596">Tcl</option>
                                                            <option value="597">Tcsh</option>
                                                            <option value="598">Tea</option>
                                                            <option value="599">Terra</option>
                                                            <option value="600">Testes automatizados</option>
                                                            <option value="700">Testes unitários</option>
                                                            <option value="601">TeX</option>
                                                            <option value="602">Text</option>
                                                            <option value="603">Textile</option>
                                                            <option value="604">Thrift</option>
                                                            <option value="606">Tipfy</option>
                                                            <option value="605">TI Program</option>
                                                            <option value="607">TLA</option>
                                                            <option value="608">Tomcat</option>
                                                            <option value="609">TOML</option>
                                                            <option value="610">Tornado</option>
                                                            <option value="611">Turbine</option>
                                                            <option value="612">TurboGears</option>
                                                            <option value="613">Turing</option>
                                                            <option value="614">Turtle</option>
                                                            <option value="615">Twig</option>
                                                            <option value="616">TXL</option>
                                                            <option value="617">TypeScript</option>
                                                            <option value="618">UKI</option>
                                                            <option value="619">UML</option>
                                                            <option value="620">Unified Parallel C</option>
                                                            <option value="621">Unity</option>
                                                            <option value="622">Unity3D Asset</option>
                                                            <option value="623">Uno</option>
                                                            <option value="624">UnrealScript</option>
                                                            <option value="625">UrWeb</option>
                                                            <option value="626">Vaadin</option>
                                                            <option value="627">Vala</option>
                                                            <option value="628">Vanilla</option>
                                                            <option value="629">Vapor</option>
                                                            <option value="630">VBA</option>
                                                            <option value="631">VCL</option>
                                                            <option value="632">Verilog</option>
                                                            <option value="633">Vert.x</option>
                                                            <option value="634">VHDL</option>
                                                            <option value="635">VimL</option>
                                                            <option value="636">Visual Basic</option>
                                                            <option value="637">Volt</option>
                                                            <option value="638">Vork</option>
                                                            <option value="639">Vroom</option>
                                                            <option value="640">Vue</option>
                                                            <option value="641">Vue.js</option>
                                                            <option value="642">Wavefront Material</option>
                                                            <option value="643">Wavefront Object</option>
                                                            <option value="644">Waves</option>
                                                            <option value="647">web2py</option>
                                                            <option value="692">Web API</option>
                                                            <option value="648">WebGUI</option>
                                                            <option value="649">WebIDL</option>
                                                            <option value="650">Webjure</option>
                                                            <option value="645">Web Ontology Language</option>
                                                            <option value="646">Web Services</option>
                                                            <option value="651">Wee</option>
                                                            <option value="652">Wicket</option>
                                                            <option value="653">wisp</option>
                                                            <option value="654">WordPress</option>
                                                            <option value="655">World of Warcraft Addon Data</option>
                                                            <option value="697">WPF</option>
                                                            <option value="656">X10</option>
                                                            <option value="657">Xamarin</option>
                                                            <option value="658">xBase</option>
                                                            <option value="659">XC</option>
                                                            <option value="660">Xitrum</option>
                                                            <option value="661">XML</option>
                                                            <option value="709">XMPP</option>
                                                            <option value="662">Xojo</option>
                                                            <option value="663">XPages</option>
                                                            <option value="664">XProc</option>
                                                            <option value="665">XQuery</option>
                                                            <option value="666">XS</option>
                                                            <option value="667">XSLT</option>
                                                            <option value="668">Xtend</option>
                                                            <option value="669">Xyster</option>
                                                            <option value="670">Yacc</option>
                                                            <option value="671">YAML</option>
                                                            <option value="672">YANG</option>
                                                            <option value="673">Yesod</option>
                                                            <option value="674">Yii</option>
                                                            <option value="675">Zend</option>
                                                            <option value="676">Zephir</option>
                                                            <option value="677">Zimpl</option>
                                                            <option value="678">ZK</option>
                                                            <option value="679">Zope</option>
                                                            <option value="680">Zotonic</option>
                                                        </select>
                                                    </div>

                                                    <div className="nivel">
                                                        <label htmlFor="nivel">Nivel:</label>
                                                        <select className="input" name="nivel" value={usuario} onChange={a => setUsuario(a.target.value)} >
                                                            <option selected>Escolher...</option>
                                                            <option>Básico</option>
                                                            <option>Intermediário</option>
                                                            <option>Avançado</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <label htmlFor="hab">Habilidades:</label>
                                                        <select className="input" name="hab" value={usuario} onChange={a => setUsuario(a.target.value)}>
                                                            <option selected>Escolher...</option>
                                                            <option>SQL SERVER</option>
                                                            <option>MongoBd</option>
                                                            <option>Visual Studio 2019</option>
                                                        </select>
                                                    </div>

                                                    <div className="nivel">
                                                        <label htmlFor="nivel">Nivel:</label>
                                                        <select className="input" name="nivel" value={usuario} onChange={a => setUsuario(a.target.value)} >
                                                            <option selected>Escolher...</option>
                                                            <option>Básico</option>
                                                            <option>Intermediário</option>
                                                            <option>Avançado</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="btn-proximo-hab">
                                                <Button onClick="" name="btn1" value="Adicionar Habilidades" />
                                            </div>
                                            <div className="btn-proximo">
                                                <Link to="/cadastroAluno"> <Button onClick="" name="btn2" value="Voltar" /> </Link>
                                                <Button onClick="" name="btn1" value="Salvar" />
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </main>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default cadastrocandidato02;