/**
 * Defines different naming conventions for variables, functions, and other
 * identifiers in code.
 */
enum NamingConventions {
  // e.g. thisIsName
  camelCase = 'camelCase',

  // e.g. ThisIsName
  pascalCase = 'pascalCase',
  capitalCamelCase = pascalCase,

  // e.g. this_is_name
  snakeCase = 'snakeCase',
  cCase = snakeCase,

  // e.g. This_Is_Name
  adaCase = 'adaCase',

  // e.g. this-is-name
  kebabCase = 'kebabCase',
  caterpillarCase = kebabCase,
  dashCase = kebabCase,
  hyphenCase = kebabCase,
  lispCase = kebabCase,
  spinalCase = kebabCase,
  cssCase = kebabCase,

  // e.g. THIS-IS-NAME
  cobolCase = 'cobolCase',

  // e.g. This-Is-Name
  trainCase = 'trainCase',
  httpHeaderCase = adaCase,

  // e.g. THIS_IS_NAME
  macroCase = 'macroCase',
  constantCase = macroCase,
  screamCase = macroCase,

  // e.g. THIS IS NAME
  upperCase = 'upperCase',

  // e.g. This Is Name
  titleCase = 'titleCase',

  // e.g. this is name
  lowerCase = 'lowerCase',
  flatCase = lowerCase,
  mumbleCase = lowerCase,
  lazyCase = lowerCase,

  // e.g. this.is.name
  dotCase = 'dotCase',

  // e.g. _thisIsName
  underscoreNotation = 'underscoreNotation',

  // e.g. This is name
  sentenceCase = 'sentenceCase',
}

export default NamingConventions;
