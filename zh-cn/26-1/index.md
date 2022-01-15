# 命題邏輯 Logical Equivalences 邏輯等價, Rules of Inference 推理規則


<!--more-->
![IP定位](https://tool.lu/netcard/)

# 命題邏輯 Logical Equivalences 邏輯等價, Rules of Inference 推理規則

## Logical Equivalences

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
    <mtr>
      <mtd>
        <mtable columnalign="center center center" columnspacing="1em" rowspacing="4pt" columnlines="solid solid" rowlines="solid solid solid solid solid solid solid solid solid solid" frame="solid">
          <mtr>
            <mtd>
              <mtext>Equivalence</mtext>
            </mtd>
            <mtd>
              <mtext>Name</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi mathvariant="normal">&#x22A4;</mi>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi mathvariant="normal">&#x22A5;</mi>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Identity laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi mathvariant="normal">&#x22A4;</mi>
                      <mo>&#x2261;</mo>
                      <mi mathvariant="normal">&#x22A4;</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi mathvariant="normal">&#x22A5;</mi>
                      <mo>&#x2261;</mo>
                      <mi mathvariant="normal">&#x22A5;</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Domination laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>p</mi>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>p</mi>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Idempotent or tautology laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mo stretchy="false">(</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>p</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Double negation law</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>q</mi>
                      <mo>&#x2261;</mo>
                      <mi>q</mi>
                      <mo>&#x2228;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>q</mi>
                      <mo>&#x2261;</mo>
                      <mi>q</mi>
                      <mo>&#x2227;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Commutative laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2228;</mo>
                      <mi>r</mi>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>q</mi>
                      <mo>&#x2228;</mo>
                      <mi>r</mi>
                      <mo stretchy="false">)</mo>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2227;</mo>
                      <mi>r</mi>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>q</mi>
                      <mo>&#x2227;</mo>
                      <mi>r</mi>
                      <mo stretchy="false">)</mo>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Associative laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>q</mi>
                      <mo>&#x2227;</mo>
                      <mi>r</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2227;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>r</mi>
                      <mo stretchy="false">)</mo>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>q</mi>
                      <mo>&#x2228;</mo>
                      <mi>r</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2228;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>r</mi>
                      <mo stretchy="false">)</mo>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Distributive laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>q</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>q</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>De Morgan's laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mo stretchy="false">(</mo>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi>q</mi>
                      <mo stretchy="false">)</mo>
                      <mo>&#x2261;</mo>
                      <mi>p</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Absorption laws</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mrow data-mjx-texclass="ORD">
                <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                  <mtr>
                    <mtd>
                      <mi>p</mi>
                      <mo>&#x2228;</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>p</mi>
                      <mo>&#x2261;</mo>
                      <mi mathvariant="normal">&#x22A4;</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mtext>&#xA0;</mtext>
                      <mi>p</mi>
                      <mo>&#x2227;</mo>
                      <mi mathvariant="normal">&#xAC;</mi>
                      <mi>p</mi>
                      <mo>&#x2261;</mo>
                      <mi mathvariant="normal">&#x22A5;</mi>
                    </mtd>
                  </mtr>
                </mtable>
              </mrow>
            </mtd>
            <mtd>
              <mtext>Negation laws</mtext>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mtr>
  </mtable>
</math>

### Logical Equivalences Involving Conditional Statements

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
    <mtr>
      <mtd>
        <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
          <mtr>
            <mtd>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>p</mi>
              <mo>&#x2228;</mo>
              <mi>q</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>q</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>p</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi>p</mi>
              <mo>&#x2228;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi>p</mi>
              <mo>&#x2227;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi mathvariant="normal">&#xAC;</mi>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi>p</mi>
              <mo>&#x2227;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>q</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2227;</mo>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mo stretchy="false">(</mo>
              <mi>q</mi>
              <mo>&#x2227;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2228;</mo>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mo stretchy="false">(</mo>
              <mi>q</mi>
              <mo>&#x2228;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2227;</mo>
              <mo stretchy="false">(</mo>
              <mi>q</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo>&#x2228;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2228;</mo>
              <mo stretchy="false">(</mo>
              <mi>q</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
              <mo stretchy="false">)</mo>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo>&#x2227;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
              <mo stretchy="false">&#x2192;</mo>
              <mi>r</mi>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mtr>
  </mtable>
</math>

### Logical Equivalences Involving Biconditional Statements

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
    <mtr>
      <mtd>
        <mtable displaystyle="true" columnalign="right left" columnspacing="0em" rowspacing="3pt">
          <mtr>
            <mtd>
              <mi>p</mi>
              <mo stretchy="false">&#x2194;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2227;</mo>
              <mo stretchy="false">(</mo>
              <mi>q</mi>
              <mo stretchy="false">&#x2192;</mo>
              <mi>p</mi>
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi>p</mi>
              <mo stretchy="false">&#x2194;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>p</mi>
              <mo stretchy="false">&#x2194;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>q</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi>p</mi>
              <mo stretchy="false">&#x2194;</mo>
              <mi>q</mi>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo>&#x2227;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
              <mo>&#x2228;</mo>
              <mo stretchy="false">(</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>p</mi>
              <mo>&#x2227;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtext>&#xA0;</mtext>
              <mi mathvariant="normal">&#xAC;</mi>
              <mo stretchy="false">(</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2194;</mo>
              <mi>q</mi>
              <mo stretchy="false">)</mo>
            </mtd>
            <mtd>
              <mi></mi>
              <mo>&#x2261;</mo>
              <mi>p</mi>
              <mo stretchy="false">&#x2194;</mo>
              <mi mathvariant="normal">&#xAC;</mi>
              <mi>q</mi>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mtr>
  </mtable>
</math>

## Rules of Inference

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
    <mtr>
      <mtd>
        <mtable columnalign="center center" columnspacing="1em" rowspacing="4pt" columnlines="solid" rowlines="solid solid solid solid solid solid solid solid" frame="solid">
          <mtr>
            <mtd>
              <mi>R</mi>
              <mi>u</mi>
              <mi>l</mi>
              <mi>e</mi>
              <mtext>&#xA0;</mtext>
              <mi>o</mi>
              <mi>f</mi>
              <mtext>&#xA0;</mtext>
              <mi>I</mi>
              <mi>n</mi>
              <mi>f</mi>
              <mi>e</mi>
              <mi>r</mi>
              <mi>e</mi>
              <mi>n</mi>
              <mi>c</mi>
              <mi>e</mi>
            </mtd>
            <mtd>
              <mi>N</mi>
              <mi>a</mi>
              <mi>m</mi>
              <mi>e</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>p</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <munder>
                      <mrow>
                        <mi>p</mi>
                        <mo stretchy="false">&#x2192;</mo>
                        <mi>q</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </munder>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mo>&#x2234;</mo>
                    <mi>q</mi>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Modus ponens</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi mathvariant="normal">&#xAC;</mi>
                    <mi>q</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <munder>
                      <mrow>
                        <mi>p</mi>
                        <mo stretchy="false">&#x2192;</mo>
                        <mi>q</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </munder>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mo>&#x2234;</mo>
                    <mi mathvariant="normal">&#xAC;</mi>
                    <mi>p</mi>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Modus tollens</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>p</mi>
                    <mo stretchy="false">&#x2192;</mo>
                    <mi>q</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <munder>
                      <mrow>
                        <mi>q</mi>
                        <mo stretchy="false">&#x2192;</mo>
                        <mi>r</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </munder>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mo>&#x2234;</mo>
                    <mi>p</mi>
                    <mo stretchy="false">&#x2192;</mo>
                    <mi>r</mi>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Hypothetical syllogism</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>p</mi>
                    <mo>&#x2228;</mo>
                    <mi>q</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mi mathvariant="normal">&#xAC;</mi>
                    <mi>p</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mover>
                      <mrow>
                        <mo>&#x2234;</mo>
                        <mi>q</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </mover>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Disjunctive syllogism</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>p</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mover>
                      <mrow>
                        <mo>&#x2234;</mo>
                        <mi>p</mi>
                        <mo>&#x2228;</mo>
                        <mi>q</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </mover>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Addition</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <munder>
                      <mrow>
                        <mi>p</mi>
                        <mo>&#x2227;</mo>
                        <mi>q</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </munder>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mo>&#x2234;</mo>
                    <mi>p</mi>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Simplification</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>p</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mi>q</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mover>
                      <mrow>
                        <mo>&#x2234;</mo>
                        <mi>p</mi>
                        <mo>&#x2227;</mo>
                        <mi>q</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </mover>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Conjunction</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>p</mi>
                    <mo>&#x2228;</mo>
                    <mi>q</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mi mathvariant="normal">&#xAC;</mi>
                    <mi>p</mi>
                    <mo>&#x2228;</mo>
                    <mi>r</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mover>
                      <mrow>
                        <mo>&#x2234;</mo>
                        <mi>q</mi>
                        <mo>&#x2228;</mo>
                        <mi>r</mi>
                      </mrow>
                      <mo accent="true">&#x2015;</mo>
                    </mover>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Resolution</mtext>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mtr>
  </mtable>
</math>

### Rules of Inference for Quantified Statements

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
    <mtr>
      <mtd>
        <mtable columnalign="center center" columnspacing="1em" rowspacing="4pt" columnlines="solid" rowlines="solid solid solid solid" frame="solid">
          <mtr>
            <mtd>
              <mi>R</mi>
              <mi>u</mi>
              <mi>l</mi>
              <mi>e</mi>
              <mtext>&#xA0;</mtext>
              <mi>o</mi>
              <mi>f</mi>
              <mtext>&#xA0;</mtext>
              <mi>I</mi>
              <mi>n</mi>
              <mi>f</mi>
              <mi>e</mi>
              <mi>r</mi>
              <mi>e</mi>
              <mi>n</mi>
              <mi>c</mi>
              <mi>e</mi>
            </mtd>
            <mtd>
              <mi>N</mi>
              <mi>a</mi>
              <mi>m</mi>
              <mi>e</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi mathvariant="normal">&#x2200;</mi>
                    <mi>x</mi>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo stretchy="false">)</mo>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mo>&#x2234;</mo>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>c</mi>
                    <mo stretchy="false">)</mo>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Universal instantiation</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>c</mi>
                    <mo stretchy="false">)</mo>
                    <mtext>&#xA0;</mtext>
                    <mi>f</mi>
                    <mi>o</mi>
                    <mi>r</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>a</mi>
                    <mi>n</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>a</mi>
                    <mi>r</mi>
                    <mi>b</mi>
                    <mi>i</mi>
                    <mi>t</mi>
                    <mi>r</mi>
                    <mi>a</mi>
                    <mi>r</mi>
                    <mi>y</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>c</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mo>&#x2234;</mo>
                    <mi mathvariant="normal">&#x2200;</mi>
                    <mi>x</mi>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo stretchy="false">)</mo>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Universal generalization</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi mathvariant="normal">&#x2203;</mi>
                    <mi>x</mi>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo stretchy="false">)</mo>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mtext>&#xA0;</mtext>
                    <mo>&#x2234;</mo>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo stretchy="false">)</mo>
                    <mtext>&#xA0;</mtext>
                    <mi>f</mi>
                    <mi>o</mi>
                    <mi>r</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>s</mi>
                    <mi>o</mi>
                    <mi>m</mi>
                    <mi>e</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>e</mi>
                    <mi>l</mi>
                    <mi>e</mi>
                    <mi>m</mi>
                    <mi>e</mi>
                    <mi>n</mi>
                    <mi>t</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>c</mi>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Existential instantiation</mtext>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
                <mtr>
                  <mtd>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo stretchy="false">)</mo>
                    <mtext>&#xA0;</mtext>
                    <mi>f</mi>
                    <mi>o</mi>
                    <mi>r</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>s</mi>
                    <mi>o</mi>
                    <mi>m</mi>
                    <mi>e</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>e</mi>
                    <mi>l</mi>
                    <mi>e</mi>
                    <mi>m</mi>
                    <mi>e</mi>
                    <mi>n</mi>
                    <mi>t</mi>
                    <mtext>&#xA0;</mtext>
                    <mi>c</mi>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd>
                    <mtext>&#xA0;</mtext>
                    <mo>&#x2234;</mo>
                    <mi mathvariant="normal">&#x2203;</mi>
                    <mi>x</mi>
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>x</mi>
                    <mo stretchy="false">)</mo>
                  </mtd>
                </mtr>
              </mtable>
            </mtd>
            <mtd>
              <mtext>Existential generalization</mtext>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mtr>
  </mtable>
</math>

## Reference

[Logical equivalence - Wikipedia](https://en.wikipedia.org/wiki/Logical_equivalence)

[Rule of inference - Wikipedia](https://en.wikipedia.org/wiki/Rule_of_inference)




{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/6.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
