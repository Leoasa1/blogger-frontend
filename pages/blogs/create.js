import Editor from "../../components/editor/Editor";
import Layout from "@/components/layout/Layout";
import { API_URL } from "@/config/index";
import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";

const CreateBlog = (props) => {
  const router = useRouter();
  const onSaveHandler = async (
    title,
    description,
    content,
    date,
    image,
    category
  ) => {
    const toSaveData = {
      title,
      description,
      content,
      date,
      image,
      category,
    };

    const res = await fetch(`${API_URL}/blogs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSaveData),
    });

    if (!res.ok) {
      toast.error("Something Went Wrong");
    } else {
      const blog = await res.json();
      router.push(`/blogs/${blog.slug}`);
    }
    //make your ajax call to send the data to your server and save it in a database
  };

  return (
    <Layout>
      <div className="row justify-content-md-center pt-4 pb-2 text-start">
        <div className="form-group col-md-6 mb-2">
          <Editor
            onSave={(title, description, editorData, date) =>
              onSaveHandler(title, description, editorData, date)
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default CreateBlog;
