import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.protoType = {
  title: PropTypes.string,
};

export default Section;
