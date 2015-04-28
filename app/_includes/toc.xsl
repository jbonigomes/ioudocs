<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:outline="http://wkhtmltopdf.org/outline"
                xmlns="http://www.w3.org/1999/xhtml">
  <xsl:output doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
              doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
              indent="yes" />
  <xsl:template match="outline:outline">
    <html>
      <head>
        <title>Table of Contents</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style>
          body {
            font-size: 14px;
            line-height: 1.6;
            font-family: Helvetica, arial, sans-serif;
          }

          .h1 {
            padding: 0;
            cursor: text;
            color: black;
            font-size: 28px;
            font-weight: bold;
            position: relative;
            margin: 20px 0 10px;
            page-break-before: always;
            -webkit-font-smoothing: antialiased;
          }

          li {
            list-style: none;
          }
          
          ul {
            padding-left: 0em;
          }

          ul ul {
            padding-left: 1em;
          }
          
          a {
            clear: both;
            height: 17px;
            display: block;
            color: #000000;
            position: relative;
            margin-bottom: 5px;
            text-decoration: none;
            border-bottom: 1px dotted #999;
          }

          a div {
            top: 3px;
            background: #FFF;
            position: absolute;
          }

          a .right {
            right: 0;
            width: 20px;
            text-align: right;
          }

          a .left {
            left: 0;
            padding-right: 5px;
          }
        </style>

      </head>
      <body>
        <div class="h1">Abstract</div>
        <p>
          When shopping with friends, it can be rather cumbersome to keep track
          of all shared expenses. What about having a mean to swiftly store what
          you spend with a view to settling it at a more convenient time? IOU
          allows you to create log books, that can be shared with your Facebook
          friends and keeps track of those things you buy together. From grocery
          lists to household goods, party makers to house shares, IOU has you
          covered, simply create a new log book, invite your friends and enter
          what you spend as you spend. IOU will calculate what you owe and what
          your friends owe you, with a clever change optimised algorithm. You
          can even create items you intend to buy, so no need for shopping lists
          anymore. And what is best, it is all updated in real time.
        </p>

        <div class="h1">Table of Contents</div>
        <ul><xsl:apply-templates select="outline:item/outline:item"/></ul>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="outline:item">
    <li>
      <xsl:if test="@title!=''">
        <a>
          <xsl:if test="@link">
            <xsl:attribute name="href">
              <xsl:value-of select="@link"/>
            </xsl:attribute>
          </xsl:if>
          <xsl:if test="@backLink">
            <xsl:attribute name="name">
              <xsl:value-of select="@backLink"/>
            </xsl:attribute>
          </xsl:if>

          <div class="left"><xsl:value-of select="@title" /></div>
          <div class="right"><xsl:value-of select="@page" /></div>
        </a>
      </xsl:if>
      <ul>
        <xsl:comment>
          added to prevent self-closing tags in QtXmlPatterns
        </xsl:comment>
        <xsl:apply-templates select="outline:item"/>
      </ul>
    </li>
  </xsl:template>
</xsl:stylesheet>
