import PropTypes from "prop-types";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const AccordionItem = ({ title, children, isOpen, toggle }, ...props) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${!isOpen && "rounded"} card bg-white space-y-3`}>
      <div
        className="flex flex-row items-center justify-between cursor-pointer"
        onClick={() => toggle()}
      >
        <h5>{title}</h5>
        <MdExpandMore className="w-5 h-5" />
      </div>
      {isOpen && <div dangerouslySetInnerHTML={{ __html: children }}></div>}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

AccordionItem.defaultProps = {};

export const Accordion = ({
  items,
  selectedItem,
  setSelectedItem,
  LeadingIcon,
  props,
}) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleOpen = (id) => () =>
    setIsOpen((isOpen) => (isOpen === id ? null : id));
  return (
    <div className="space-y-3" {...props}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={isOpen === index}
          toggle={toggleOpen(index)}
        >
          {item.body}
        </AccordionItem>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  isExpanded: PropTypes.bool,
  selectedItem: PropTypes.string,
  setSelectedItem: PropTypes.func,
  LeadingIcon: PropTypes.elementType,
};

Accordion.defaultProps = {
  items: [
    {
      title: "Accordion Item 1",
      body: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis impedit delectus numquam tempora amet voluptas earum magni facilis mollitia, iusto optio, excepturi doloribus aperiam.</p>",
    },
    {
      title: "Accordion Item 2",
      body: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis eos mollitia! Impedit at sapiente error distinctio, voluptas tempora voluptatibus alias nulla quam consequatur accusantium dolorum quae laborum quos! Beatae aperiam inventore, sit ipsam quas esse? Voluptate quisquam debitis est soluta quod at fuga vero, praesentium vel obcaecati quidem magnam eveniet tenetur qui veniam dolores vitae, enim autem architecto, reiciendis facere cum. Impedit quas, alias quae ab neque autem quidem nisi consequatur exercitationem eos natus quibusdam perferendis ducimus? Deleniti eaque exercitationem aliquam praesentium? Exercitationem reiciendis excepturi, libero, mollitia doloremque eos, dolores ducimus iure id culpa quae! Saepe mollitia doloremque cumque?</p>",
    },
    {
      title: "Accordion Item 3",
      body: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aspernatur impedit nemo doloribus blanditiis nam doloremque dolores eveniet voluptates tempora, et velit sit asperiores non quae vitae laborum atque fugit expedita perspiciatis facilis? Saepe perspiciatis, non deserunt exercitationem officiis earum facere soluta qui consequatur cupiditate id, quisquam architecto, voluptatem aperiam!</p>",
    },
  ],
};
