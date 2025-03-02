'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ReactElement, ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

type ExpandCollapseProps = {
  title: string;
  subtitle: string;
  expandedContent: ReactNode;
};

const ExpandCollapse = ({ expandedContent, subtitle, title }: ExpandCollapseProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      {/* Collapsible Trigger (Header) */}
      <CollapsibleTrigger className="w-full flex justify-between items-center cursor-pointer text-left">
        <div className={'flex flex-col'}>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </CollapsibleTrigger>

      {/* Expanded Content */}
      <CollapsibleContent>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-3">
          {expandedContent}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandCollapse;
